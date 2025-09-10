## CloudCart (Next.js)
<p align="center">
  <a href="https://cloud-cart-next-js.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Cloud%20Cart-brightgreen?style=for-the-badge&logo=vercel" alt="Live Demo">
  </a>
</p>

CloudCart is a modern e-commerce demo application built with Next.js (App Router).
It showcases authentication, protected routes and a clean, responsive UI.

### Features
- **Authentication** : Secure GitHub login via NextAuth.js
- **Route Protection** : /products and product detail pages accessible only after sign-in
- **SEO Optimization** : Custom metadata with dynamic and static titles for different routes
- **Modern UI**: Built with Next.js App Router, CSS modules, and font optimization

## Quick start
```bash
npm install
npm run dev
```

## Environment setup
Create an `.env` file in the project root with:
```bash
NEXTAUTH_URL=[http://localhost:3000](https://cloud-cart-next-js.vercel.app/)
NEXTAUTH_SECRET=your_generated_secret
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret
```
Restart the dev server after edits.

### GitHub OAuth
- Homepage: [`http://localhost:3000`](https://cloud-cart-next-js.vercel.app/)
- Callback: [`http://localhost:3000/api/auth/callback/github`](https://cloud-cart-next-js.vercel.app/api/auth/callback/github)

### Auth & protection
- Config: `src/app/api/auth/[...nextauth]/route.js`
- Middleware: `src/middleware.js` (protects `/products` and subpaths)
- Unauthed users → `/login`

### Scripts
- `npm run dev` — dev server
- `npm run build` — build
- `npm run start` — prod server

### Troubleshooting
- OAuth errors: verify `.env` and GitHub callback URL; restart dev
- Always clear cookies if stuck redirecting
