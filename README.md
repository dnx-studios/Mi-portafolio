# Dinox — Portfolio

Portfolio personal de Dinox, desarrollador de bots para Discord y addons para Minecraft.

---

## 🚀 Publicar en GitHub Pages

### Paso 1 — Sube el repositorio a GitHub

Si aún no lo has hecho, crea un repositorio en GitHub y súbelo:

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

### Paso 2 — Genera el build

Dentro de Replit, abre la terminal y ejecuta:

```bash
# Si tu repo se llama, por ejemplo, "portfolio":
GITHUB_REPO_NAME=portfolio pnpm --filter @workspace/portfolio run build:github

# Si el repo se publica en la raíz (usuario.github.io):
GITHUB_REPO_NAME="" pnpm --filter @workspace/portfolio run build:github
```

> ⚠️ Cambia `portfolio` por el nombre exacto de tu repositorio de GitHub.

### Paso 3 — Sube el build

```bash
git add docs/
git commit -m "build: update github pages"
git push
```

### Paso 4 — Activa GitHub Pages

1. Ve a tu repositorio en GitHub.
2. Entra a **Settings → Pages**.
3. En **Source**, selecciona:
   - Branch: `main`
   - Carpeta: `/docs`
4. Guarda los cambios.

Tu portfolio estará disponible en:

```
https://TU_USUARIO.github.io/TU_REPO/
```

---

## 🔄 Actualizar el portfolio

Cada vez que hagas cambios, repite los pasos 2 y 3:

```bash
GITHUB_REPO_NAME=TU_REPO pnpm --filter @workspace/portfolio run build:github
git add docs/
git commit -m "build: update"
git push
```

---

## 🛠 Desarrollo local

```bash
pnpm --filter @workspace/portfolio run dev
```
