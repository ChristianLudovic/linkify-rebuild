import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handledata(req, res) {
    const nbaposts = await prisma.nbaPost.findMany()
    res.json(nbaposts)
}