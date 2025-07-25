import { PrismaClient } from '@prisma/client'
import checkApiKey from '../../../lib/checkApiKey'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (!checkApiKey(req, res)) return
    const { id } = req.query

    if (req.method === 'GET') {
        try {
            const product = await prisma.product.findUnique({ where: { id } })
            if (!product) {
                return res.status(404).json({ error: 'Produto não encontrado' })
            }
            res.status(200).json(product)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Erro ao buscar produto' })
        }

    } else if (req.method === 'PUT') {
        try {
            const product = await prisma.product.findUnique({ where: { id } })
            if (!product) {
                return res.status(404).json({ error: 'Produto não encontrado' })
            }
            const updateData = req.body
            
            const updatedProduct = await prisma.product.update({
                where: { id },
                data: updateData,
            })

            res.status(200).json(updatedProduct)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Falha ao atualizar produto' })
        }

    } else if (req.method === 'DELETE') {
        try {
            const product = await prisma.product.findUnique({ where: { id } })
            if (!product) {
                return res.status(404).json({ error: 'Produto não encontrado' })
            }
            await prisma.product.delete({
                where: { id },
            })
            res.status(204).end() // No Content
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Falha ao deletar produto' })
        }

    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
