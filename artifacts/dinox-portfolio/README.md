# Portafolio Dinox

Portafolio personal de Dinox, creador mexicano de mundos para Minecraft Bedrock,
herramientas web y automatizaciones.

## Desarrollo local

Desde la raíz del proyecto:

```bash
pnpm install
pnpm --filter @workspace/dinox-portfolio run dev
```

## Comprobaciones

```bash
pnpm --filter @workspace/dinox-portfolio run typecheck
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/dinox-portfolio run build
```

## Netlify

La configuración de despliegue está en `netlify.toml` en la raíz del repositorio.
Netlify usa el build de `@workspace/dinox-portfolio` y publica
`artifacts/dinox-portfolio/dist/public`. No se requieren variables privadas para
este sitio estático.