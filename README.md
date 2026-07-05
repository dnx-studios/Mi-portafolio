# Dinox | Portfolio

Portafolio personal de Dinox — desarrollador mexicano especializado en bots para Discord y addons para Minecraft.

---

## Vista previa en Replit

El portafolio corre automáticamente en el flujo de trabajo de Replit. Solo abre la vista previa para verlo.

---

## Cómo publicar en GitHub Pages

### Paso 1: Construye los archivos estáticos

Abre la consola de Replit y ejecuta:

```bash
# Si tu repositorio se llama "portfolio" (https://tuusuario.github.io/portfolio/)
GITHUB_REPO_NAME=portfolio pnpm --filter @workspace/portfolio run build:github

# Si usas dominio raíz (https://tuusuario.github.io/)
pnpm --filter @workspace/portfolio run build:github
```

Esto genera los archivos listos para GitHub Pages en la carpeta **`docs/`** en la raíz del proyecto.

### Paso 2: Sube tu código a GitHub

```bash
git init
git add .
git commit -m "Mi portafolio - Dinox"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

### Paso 3: Activa GitHub Pages

1. Ve a tu repositorio en GitHub.
2. Entra a **Settings → Pages**.
3. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/docs`
4. Haz clic en **Save**.

Tu portafolio estará disponible en:
`https://TU_USUARIO.github.io/TU_REPO/`

---

## Estructura del proyecto

```
/
├── artifacts/
│   └── portfolio/          # Código fuente del portafolio (React + Vite)
│       ├── src/            # Componentes y páginas
│       ├── public/         # Archivos estáticos (avatar, favicon, etc.)
│       └── vite.github.config.ts  # Config de build para GitHub Pages
├── docs/                   # Output del build para GitHub Pages
├── attached_assets/        # Imagen de perfil y otros assets
└── README.md
```

## Tecnologías usadas

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion (animaciones)
- Lucide React + React Icons

---

## Contacto

- Correo: dinoxio@proton.me
