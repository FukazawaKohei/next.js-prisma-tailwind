import { PrismaLib } from '~/libs/prisma'
import { categories } from '../consts'

export async function seedCategories() {
  const prisma = PrismaLib.instance
  try {
    await prisma.category.createMany({
      data: categories,
    })
    console.info('Added category data')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}
