# Portafolio Dinox

Sitio personal de una sola página para presentar el trabajo de Dinox en Minecraft Bedrock, herramientas web y automatizaciones.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/dinox-portfolio run dev` — ejecutar el portafolio
- `pnpm --filter @workspace/dinox-portfolio run typecheck` — comprobar el portafolio
- `PORT=4173 BASE_PATH=/ pnpm --filter @workspace/dinox-portfolio run build` — generar el build estático para Netlify
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Portafolio: React 19 + Vite 7 + Tailwind CSS 4

## Where things live

- `artifacts/dinox-portfolio/` — aplicación web principal
- `artifacts/dinox-portfolio/src/App.tsx` — contenido e interacciones del portafolio
- `artifacts/dinox-portfolio/src/index.css` — tokens visuales, layout y motion
- `artifacts/dinox-portfolio/public/` — favicon, robots y assets para SEO social
- `netlify.toml` — build y publicación estática en Netlify

## Architecture decisions

- El portafolio es frontend-only; no necesita API, base de datos ni secretos para funcionar.
- Netlify publica el build estático del artifact usando el `netlify.toml` de la raíz.
- La navegación usa anclas de una sola página para mantener el enlace compartible y simple.
- Las animaciones tienen una ruta reducida mediante `prefers-reduced-motion`.

## Product

- Presenta la identidad y especialidades de Dinox.
- Permite explorar tecnologías con detalles accesibles.
- Muestra colaboraciones, el proyecto Workly MC y una vía directa de contacto.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
