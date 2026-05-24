# Leonaldo.dev — Portafolio Personal

[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

Portafolio web profesional de **Leonardo Figueroa** — Desarrollador Full Stack especializado en React, Node.js y MongoDB.

🌐 **Sitio en vivo:** _pendiente de dominio_

---

## 🚀 Stack

| Frontend         | Backend | Herramientas |
| ---------------- | ------- | ------------ |
| React 19         | Node.js | Vite 5       |
| Tailwind CSS 3.4 | Express | Sharp        |
| JavaScript (ESM) | MongoDB | ESLint       |

---

## ✨ Características

- **Diseño glassmorphism** con tema claro/oscuro
- **Carga asíncrona de Google Fonts** (sin render blocking)
- **Imágenes en WebP** con fallback a JPEG/PNG
- **Container queries** para cards adaptativas
- **Filtro de proyectos por URL** (`?category=fullstack`)
- **Typewriter effect** en el Hero
- **Scroll progress bar** y animaciones con IntersectionObserver
- **Formulario de contacto** configurable vía Formspree
- **JSON-LD** para datos estructurados (SEO)
- **Skip to content** y focus-visible ring (accesibilidad)
- **Error boundary** para aislamiento de fallos
- **content-visibility** en secciones below-the-fold

---

## 📂 Estructura del proyecto

```txt
src/
├── features/
│   ├── navbar/       Navbar, ThemeToggle, ScrollProgress
│   ├── hero/         Hero, Typewriter
│   ├── about/        About, SkillBar, Timeline
│   ├── projects/     Projects, ProjectCard (compound)
│   ├── contact/      Contact (useReducer + state machine)
│   └── footer/       Footer
└── shared/
    ├── hooks/        useInView, useTypewriter, useTheme
    ├── constants/    social, skills, projects
    ├── context/      ThemeContext
    ├── AnimatedSection.jsx
    ├── SocialIcon.jsx
    └── ErrorBoundary.jsx
```

Organizado por **features** en lugar de tipo de archivo para mejorar cohesión.

---

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar dev server (HMR)
npm run dev

# Build producción
npm run build

# Vista previa del build
npm run preview

# Lint
npm run lint

# Convertir imágenes a WebP
npm run images:webp
```

### Formulario de contacto

Copia `.env.example` a `.env` y configura el endpoint:

```env
VITE_FORM_ENDPOINT=https://formspree.io/f/tu-form-id
```

Sin endpoint el formulario funciona en modo simulado local.

---

## 📸 Imágenes

Las imágenes deben estar en `public/`. Para convertirlas a WebP:

```bash
npm run images:webp
```

Esto genera versiones `.webp` de todos los `.jpg`, `.jpeg` y `.png` en `public/`. El navegador usa WebP cuando es compatible, con fallback automático vía `<picture>`.

---

## 🔍 SEO

- **Open Graph** y **Twitter Cards** configurados en `index.html`
- **JSON-LD** con datos de Persona y Sitio Web
- **Canonical URL** y **sitemap.xml**
- **Datos estructurados** para motores de búsqueda

---

## ♿ Accesibilidad

- Skip to content link
- Roles y ARIA labels en componentes interactivos
- `focus-visible` rings en todos los elementos cliqueables
- `prefers-reduced-motion` respetado
- Contraste de color validado (WCAG AA)

---

## 🌐 Redes

- **GitHub:** [github.com/leonaldo999](https://github.com/leonaldo999)
- **LinkedIn:** [linkedin.com/in/leonardo-figueroa-lima-191070293](https://www.linkedin.com/in/leonardo-figueroa-lima-191070293)
- **Email:** [leonaldo999@gmail.com](mailto:leonaldo999@gmail.com)

---

## 📄 Licencia

Este proyecto es de código abierto. Todos los derechos reservados para el contenido personal.
