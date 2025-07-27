import { PrismaClient } from '@prisma/client'
import checkApiKey from '../../../lib/checkApiKey'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (!checkApiKey(req, res)) return

  const { id } = req.query 

  if (req.method === 'GET') {
        try {
            const orderHistory = await prisma.orderHistory.findUnique({ where: { id } })
            if (!orderHistory) {
                return res.status(404).json({ error: 'OrderHistory não encontrado' })
            }
            res.status(200).json(orderHistory)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Erro ao buscar OrderHistory' })
        }

    } else if (req.method === 'DELETE') {
    try {
      const orderHistory = await prisma.orderHistory.findUnique({ where: { id } })
      if (!orderHistory) {
        return res.status(404).json({ error: 'Pedido não encontrado' })
      }
      await prisma.orderHistory.delete({ where: { id } })
      return res.status(204).end()
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Falha ao deletar pedido do Historico' })
    }
  } else {
    res.setHeader('Allow', ['DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
