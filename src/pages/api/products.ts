import { NextApiRequest, NextApiResponse } from 'next/types'
import { PrismaLib } from '~/libs/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const prisma = PrismaLib.instance
      const data = await prisma.product.findMany({})
      return res.status(200).json({ data })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: 'Something went wrong' })
    }
  } else {
    return res.status(405).json({ msg: 'Method not allowed' })
  }
}
