import { PrismaLib } from '~/libs/prisma'
import { products } from '../consts'

export async function seedResets() {
  const prisma = PrismaLib.instance
  try {
    await prisma.product.deleteMany()
    console.info('Deleted records in product table')

    await prisma.category.deleteMany()
    console.info('Deleted records in category table')

    await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`
    console.info('reset product auto increment to 1')

    await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`
    console.info('reset category auto increment to 1')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}
