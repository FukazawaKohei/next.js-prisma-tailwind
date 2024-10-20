import { PrismaLib } from '~/libs/prisma'
import { products } from '../consts'

export async function seedProducts() {
  const prisma = PrismaLib.instance
  try {
    await prisma.product.createMany({
      data: products,
    })
    console.info('Added product data')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}
