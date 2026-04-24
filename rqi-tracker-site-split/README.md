# RQI Tracker (split site)

This folder is a split version of `rqi-tracker.html`:

- `index.html`
- `assets/styles.css`
- `assets/app.js`

## Run locally

From `rqi-tracker-site-split/`:

```bash
npm install
npm run dev -- --port 5174
```

Open `http://localhost:5174/`.

## Deploy (Vercel) + Team data storage

This project is now a Next.js app with:

- Auth (login): Auth.js (NextAuth) Credentials (email + password)
- Database: Postgres (recommended: Vercel Postgres)
- Team-shared data: stored in `WorkspaceData.payload` (JSON: `{ projects, members }`)

### Required environment variables

- `DATABASE_URL`: Postgres connection string
- `NEXTAUTH_SECRET`: random secret string
- `NEXTAUTH_URL`: set automatically by Vercel in production; optional locally (e.g. `http://localhost:5174`)

### First-time setup

1. Create a Postgres database (Vercel Storage → Postgres)
2. Set the env vars above in Vercel Project Settings
3. Run migrations (locally):

```bash
npx prisma migrate dev
```

4. Visit `/auth/signup` to create the first user (becomes workspace owner)

