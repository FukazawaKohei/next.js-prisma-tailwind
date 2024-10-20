import type { Category, Product } from '@prisma/client'

const { Prisma } = require('@prisma/client')

export const categories: Readonly<PartiallyPartial<Category, 'id'>>[] = [
  {
    name: 'Hats',
    description: 'Things you can wear on your head',
  },
  {
    name: 'Socks',
    description: 'Things you can wear on your feet',
  },
  {
    name: 'Shirts',
    description: 'Things you wear on the top half of your body',
  },
]

export const products: Readonly<PartiallyPartial<Product, 'id'>>[] = [
  {
    name: 'Cool helmet.',
    description: 'A nice helmet to wear on your head',
    price: new Prisma.Decimal(19.95),
    image: '/imgs/helmet.jpg',
    category_id: 1,
  },
  {
    name: 'Grey T-Shirt',
    description: 'A nice shirt that you can wear on your body',
    price: new Prisma.Decimal(22.95),
    image: '/imgs/shirt.jpg',
    category_id: 3,
  },
  {
    name: 'Socks',
    description: 'Cool socks that you can wear on your feet',
    price: new Prisma.Decimal(12.95),
    image: '/imgs/socks.jpg',
    category_id: 2,
  },
  {
    name: 'Sweatshirt',
    description: 'Cool sweatshirt that you can wear on your body',
    price: new Prisma.Decimal(12.95),
    image: '/imgs/sweatshirt.jpg',
    category_id: 3,
  },
]
