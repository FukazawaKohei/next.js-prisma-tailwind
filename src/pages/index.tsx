import Head from 'next/head'
import React from 'react'
import Product from '~/components/Product'
import { PrismaLib } from '~/libs/prisma'
import type { Category, Product as ProductType } from '@prisma/client'

export default function Home({ products }: { products: (ProductType & { category: Category })[] }) {
  return (
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name='description' content='PlanetScale Quickstart for Next.js' />
        <link rel='icon' type='image/png' href='/favicon.ico' />
      </Head>

      <main className='p-10 mx-auto max-w-4xl'>
        <h1 className='text-6xl font-bold mb-4 text-center'>Next.js Starter</h1>
        <p className='mb-20 text-xl text-center'>🔥 Shop from the hottest items in the world 🔥</p>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-4'>
          {products.map((product: ProductType & { category: Category }) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const prisma = PrismaLib.instance
  const data = await prisma.product.findMany({
    include: {
      category: true,
    },
  })

  //convert decimal value to string to pass through as json
  const products = data.map((product) => ({
    ...product,
    price: product.price.toString(),
  }))
  return {
    props: { products: products as unknown as (ProductType & { category: Category })[] },
  }
}
