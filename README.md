![Logo](./public/favicon.png)

# Peddle Technologies - Full-Stack Developer Assessment

[![Next.js](https://img.shields.io/badge/Next.js-14.x-111111.svg)](https://nextjs.org/docs)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/docs/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-316192.svg)](https://www.postgresql.org/docs/16/index.html)
[![Supbase](https://img.shields.io/badge/Supbase-0.24-3ECF8E.svg)](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

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

> Production: (client) http://shopera.vercel.app/ (server) http://shopera.vercel.app/api/

## API Documentation

> #### [Products Resource](<./src/app/(api)/api/products>)

|  Method | Endpoint                           | Query | Body | Summary                            |
| ------: | :--------------------------------- | :---: | :--: | :--------------------------------- |
|     GET | /products                          |       |      | all (ASC order)                    |
|     GET | /products/[product_id]            |       |      | one                                |
|    ^GET | /products/?like=[search]          |   x   |      | search (product, brand or barcode) |
|    POST | /products                          |       |  x   | add                                |
|   PATCH | /products/[product_id]            |       |  x   | update                             |
|     PUT | /products/[product_id]            |       |  x   | replace                            |
|  DELETE | /products/[product_id]            |       |      | soft delete (trash)                |
| ^DELETE | /products/[product_id]/?undo=true |   x   |      | undo delete (restore)              |

> #### [Brands Resource](<./src/app/(api)/api/brands>)

|  Method | Endpoint                      | Query | Body | Summary               |
| ------: | :---------------------------- | :---: | :--: | :-------------------- |
|     GET | /brands                       |       |      | all (ASC order)       |
|     GET | /brands/[brand_id]           |       |      | one                   |
|    POST | /brands                       |       |  x   | add                   |
|   PATCH | /brands/[brand_id]           |       |  x   | update                |
|     PUT | /brands/[brand_id]           |       |  x   | replace               |
|  DELETE | /brands/[brand_id]           |       |      | soft delete (trash)   |
| ^DELETE | /brands/[brand_id]/?undo=true |   x   |      | undo delete (restore) |

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

## Known Issues

Added the `.env` file to .gitignore but it did not exclude it, I think it is related to Prisma ORM (not sure).
