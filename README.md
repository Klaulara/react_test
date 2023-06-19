This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Database

This projects needs a local database set up to run locally. The project uses postgreSQL as a database, use the following code to create the table. 

```
CREATE TABLE indicadores (id INT, nombreindicador VARCHAR, codigoindicador VARCHAR, unidadmedidaindicador VARCHAR, valorindicador DECIMAL, fechaindicador DATE, tiempoindicador VARCHAR, origenindicador VARCHAR);
```
After setting up the database set up your local variables in a new file named .env.local 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## First time running this app

If you are first running the app, your database may be empty. If that is the case you will find a new button that will help you fill your local database if you have followed the previous instruction. 

If the programs finds that your local database has information you will not see that button and you will be able to perform the basic crud operations. 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
