## CloudCart (Next.js)

Simple e‑commerce demo built with Next.js App Router. Includes GitHub OAuth via NextAuth, protected products pages, and a clean UI.

### Highlights
- **Auth**: GitHub login with NextAuth
- **Protected routes**: `/products` (and product detail pages) require sign‑in
- **Modern UI**: App Router, CSS modules, font optimization

## Quick start
```bash
npm install
npm run dev
```

## Environment setup
Create an `.env` file in the project root with:
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_generated_secret
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret
```
Restart the dev server after edits.

### GitHub OAuth
- Homepage: `http://localhost:3000`
- Callback: `http://localhost:3000/api/auth/callback/github`

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