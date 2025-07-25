import { PrismaClient } from '@prisma/client'
import checkApiKey from '../../../lib/checkApiKey'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (!checkApiKey(req, res)) return

  if (req.method === 'GET') {
    try {
      const orderHistory = await prisma.orderHistory.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      })

      res.status(200).json(orderHistory)
    } catch (error) {
      console.error('Erro ao buscar histórico de pedidos:', error)
      res.status(500).json({ error: 'Erro interno do servidor' })
    }
  }

  else if (req.method === 'POST') {
    try {
      const { products, ...orderData } = req.body

      const productList = await prisma.product.findMany({
        where: {
          id: { in: products.map(p => p.productId) }
        }
      })

      const totalAmount = products.reduce((sum, item) => {
        const product = productList.find(p => p.id === item.productId)
        const price = product?.promoPrice ?? product?.price ?? 0
        return sum + price * item.quantity
      }, 0)

      const newOrderHistory = await prisma.orderHistory.create({
        data: {
          ...orderData,
          totalAmount,
          orderItems: {
            create: products.map((item) => ({
              quantity: item.quantity,
              product: {
                connect: { id: item.productId }
              }
            }))
          },
        },
        include: {
          orderItems: {
            include: {
              product: true
            }
          }
        }
      })

      res.status(201).json(newOrderHistory)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Falha ao criar pedido no histórico' })
    }
  }

  else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
