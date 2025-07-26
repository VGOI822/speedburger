import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

    if (req.method === 'GET') {
        const avaliacoes = await prisma.avaliacoes.findMany()
        res.status(200).json(avaliacoes)
    }  else if (req.method === 'POST') {
        try {
            const data = req.body
            const newAvaliacao = await prisma.avaliacoes.create({ data })
            res.status(201).json(newAvaliacao)
        } catch (error) {
            res.status(500).json({ error: 'Falha ao criar Avaliacao' })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
