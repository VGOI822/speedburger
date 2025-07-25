import { PrismaClient } from '@prisma/client'
import checkApiKey from '../../../lib/checkApiKey'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (!checkApiKey(req, res)) return

    if (req.method === 'GET') {
        const products = await prisma.product.findMany()
        res.status(200).json(products)
    } else if (req.method === 'POST') {
        try {
            const data = req.body
            const newProduct = await prisma.product.create({ data })
            res.status(201).json(newProduct)
        } catch (error) {
            res.status(500).json({ error: 'Falha ao criar produto' })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
