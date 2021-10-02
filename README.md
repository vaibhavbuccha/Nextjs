This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Routing summary

1. Page based routing mechanism - Pages are associated with a route based on their filename.
2. Nested Routes - Nested folder structure, files will be automatically routed in the same way in the URL.
3. Dynamic routes - Can be created by adding square brackets to a page menu.
4. catch all routes - Add three dots inside a square brackets to create a catch all route. Helpful when you want different URLs for the same page layout or even when you are working with pages where some of the route parameters are optional.
5. Link Component to navigate on click of an element.
6. useRouter hook's router.push method to navigate programmatically.

# getStaticProps

---

1.

---

    1. getStaticProps runs only server-side.
    2. which implies the function never runs client-side.
    3. As the matter of fact the code we write inside getStaticProps won't even be included in the JS Bundle that is send to the browser.

2.

---

    1. We can write server-side code directly in getStaticProps.
    2. Accessing the file system using the fs module and query a database can be done into getStaticProps.

### Link pre-fetching

---

Any <Link /> component in the viewport (initially or though scroll) will be prefetched by default (including the corresponding data) for pages using static generation.

### Link pre-fetching contd.

---

When a page getStaticProps is pre-rendered at build time, in addition to the page HTML File, Next.js generates a JSON file holding the result of running getStaticProps.

The JSON file will be used in client-side routing through next/link, or next/router.

When you navigate to a page thats pre-rendering using getStaticProps, Next.js fetches the JSON file (Pre-computing at build time) and uses it as the props to create the page component client-side.

Client side page transitions will not call getStaticProps as only the exported JSON in used.

## Static Generation Summery

---

Static Generation is a method of pre-rendering where the HTML Pages are generated at build time.

with and without external data.

export getstaticProps functions for external data

HTML, Javascript and a JSON file are generated

If we navigate directly to the page route the html file is served

If we navigate to the page from a different route, the page is created client side using the javascript and json prefetched from the server.

## getStaticPaths

---

getStaticPath Helps in generating dynamic paths with static parameters in pre-rendering.

## getStaticProps

---

getStaticProps Helps in server side pre-rendering.
