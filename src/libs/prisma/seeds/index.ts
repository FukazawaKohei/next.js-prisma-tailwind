import * as dotenv from 'dotenv'
import { seedCategories } from './src/category'
import { seedProducts } from './src/product'
import { seedResets } from './src/reset'

// 環境ごとに切り替え
const path = '.env.local'
dotenv.config({ path })
;(async () => {
  const seeders: Record<string, () => Promise<void>> = {
    resets: seedResets,
    categories: seedCategories,
    products: seedProducts,
  }

  for (const seeder of Object.values(seeders)) {
    console.info(`Running: ${seeder.name}`)
    await seeder()
  }
})()
  .then(() => {
    process.exit(0)
  })
  .catch((e) => {
    console.error(e)
    process.exit(-1)
  })
