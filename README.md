![Logo](./public/favicon.png)

# Peddle Technologies - Full-Stack Developer Assessment

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/docs/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8.svg)](https://tailwindcss.com/docs/installation)
[![Prisma](https://img.shields.io/badge/Prisma-5.x-0c344b.svg)](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-316192.svg)](https://www.postgresql.org/docs/16/index.html)

[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://shopera.vercel.app)

## Installation

```
$ git clone https://github.com/2gbeh/shopera.git

$ cd shopera

$ npm cache clean --force

$ npm install

$ npm run dev
```

## Usage

> Development: (client) http://localhost:3000/ (server) http://localhost:3000/api/

> Production 🚀🚀🚀: (client) http://shopera.vercel.app/ (server) http://shopera.vercel.app/api/

## API Documentation

> #### [Products Resource](<./src/app/(api)/api/products>)

|    Method | Endpoint                             | Query | Body | Summary                            |
| --------: | :----------------------------------- | :---: | :--: | :--------------------------------- |
|       GET | /products                            |       |      | all (ASC order)                    |
|       GET | /products/[product_id]               |       |      | one                                |
|    ⭐ GET | /products/?like=[search]             |   x   |      | search (product, brand or barcode) |
|    ⭐ GET | /products/validate-barcode/[barcode] |       |      | validate upc-12 barcode            |
|      POST | /products                            |       |  x   | add                                |
|     PATCH | /products/[product_id]               |       |  x   | update                             |
|       PUT | /products/[product_id]               |       |  x   | replace                            |
|    DELETE | /products/[product_id]               |       |      | soft delete (trash)                |
| ⭐ DELETE | /products/[product_id]/?undo=true    |   x   |      | undo delete (restore)              |

> #### [Brands Resource](<./src/app/(api)/api/brands>)

|    Method | Endpoint                      | Query | Body | Summary               |
| --------: | :---------------------------- | :---: | :--: | :-------------------- |
|       GET | /brands                       |       |      | all (ASC order)       |
|       GET | /brands/[brand_id]            |       |      | one                   |
|      POST | /brands                       |       |  x   | add                   |
|     PATCH | /brands/[brand_id]            |       |  x   | update                |
|       PUT | /brands/[brand_id]            |       |  x   | replace               |
|    DELETE | /brands/[brand_id]            |       |      | soft delete (trash)   |
| ⭐ DELETE | /brands/[brand_id]/?undo=true |   x   |      | undo delete (restore) |

## Tech Stack Documentation

![Screenshot](./public/tech-stack.png)

## Screenshots

#### Page 1 (Product Listing)

![Screenshot](./public/ui/page-1.png)

#### Page 2 (Edit Product Listing)

![Screenshot](./public/ui/page-2.png)

#### Page 1 - Mobile (Product Listing)

![Screenshot](./public/ui/page-1-mobile.png)

#### Page 2 - Mobile (Edit Product Listing)

![Screenshot](./public/ui/page-2-mobile.png)

## 🏆🏆 [My barcode validation algorithm](./src/server/pipes/product.pipe.ts) 🏆🏆

![Screenshot](./public/upc12-algo.png)

## Known Issues

Added the `.env` file to .gitignore but it did not exclude it, I think it is related to Prisma ORM (not sure).
