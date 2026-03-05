🌿 Sembralas — Base Técnica v0.1

Estado actual del proyecto (Astro + Tailwind v4)

1. Stack Tecnológico
Core

Astro v5

TailwindCSS v4

Vite

TypeScript

Prettier

Enfoque Arquitectónico

One-page narrativa

Separación estricta entre:

UI (componentes)

Layout

Contenido editorial (Markdown)

Data estructurada (JSON)

2. Estructura de Carpetas
SembraAlas/
│
├── public/
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Historia.astro
│   │   │   ├── Impacto.astro
│   │   │   ├── Jornadas.astro
│   │   │   ├── Premios.astro
│   │   │   ├── Galeria.astro
│   │   │   ├── Apoyar.astro
│   │   │   └── Footer.astro
│   │   │
│   │   └── ui/
│   │       └── Button.astro
│   │
│   ├── content/
│   │   ├── data/
│   │   │   └── impacto.json
│   │   └── pages/
│   │       └── historia.md
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       ├── globals.css
│       └── tokens.css
│
├── astro.config.mjs
├── content.config.ts
├── package.json
├── .prettierrc
├── .prettierignore
└── .env.example
3. Configuración Principal
3.1 astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
});
3.2 Tailwind v4 — globals.css

⚠ Tailwind v4 usa:

@import "tailwindcss";

Archivo completo:

@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--text);
  background: var(--bg);
  font-family:
    Inter,
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Arial,
    sans-serif;
}

h1,
h2,
h3 {
  font-family: "Playfair Display", ui-serif, Georgia, "Times New Roman", serif;
  letter-spacing: -0.02em;
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 1.25rem;
}
3.3 Sistema de Tokens — tokens.css
:root {
  --forest: #1E3D2F;
  --moss: #2F5D46;
  --ivory: #F4F1EA;
  --stone: #5A5A5A;
  --black: #111111;

  --text: var(--black);
  --muted: var(--stone);
  --bg: var(--ivory);

  --container: 1120px;
}
4. Layout Base
BaseLayout.astro
---
import "../styles/tokens.css";
import "../styles/globals.css";

const { title = "Sembralas" } = Astro.props;
---

<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
5. Página Principal
src/pages/index.astro
---
import BaseLayout from "../layouts/BaseLayout.astro";

import Hero from "../components/sections/Hero.astro";
import Historia from "../components/sections/Historia.astro";
import Impacto from "../components/sections/Impacto.astro";
import Jornadas from "../components/sections/Jornadas.astro";
import Premios from "../components/sections/Premios.astro";
import Galeria from "../components/sections/Galeria.astro";
import Apoyar from "../components/sections/Apoyar.astro";
import Footer from "../components/sections/Footer.astro";
---

<BaseLayout title="Sembralas">
  <Hero />
  <Historia />
  <Impacto />
  <Jornadas />
  <Premios />
  <Galeria />
  <Apoyar />
  <Footer />
</BaseLayout>
6. UI Base
6.1 Button Component

src/components/ui/Button.astro

---
type Variant = "primary" | "secondary";

const {
  href = "#",
  variant = "primary",
  class: className = "",
} = Astro.props as {
  href?: string;
  variant?: Variant;
  class?: string;
};

const base =
  "no-underline inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(244,241,234,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--forest)]";

const styles: Record<Variant, string> = {
  primary: "bg-[var(--ivory)] text-[var(--forest)] hover:opacity-90",
  secondary:
    "border border-[rgba(244,241,234,0.4)] text-[var(--ivory)] hover:bg-[rgba(255,255,255,0.06)]",
};
---

<a href={href} class={`${base} ${styles[variant]} ${className}`}>
  <slot />
</a>
7. Hero Actual
---
import Button from "../ui/Button.astro";
---

<section class="min-h-[80vh] flex items-center bg-[var(--forest)]">
  <div class="container py-20 text-[var(--ivory)]">
    <p class="text-sm tracking-[0.2em] uppercase opacity-80">
      Reforestación con respaldo académico
    </p>

    <h1 class="text-5xl md:text-6xl mt-4">
      Sembrar hoy. Respirar mañana.
    </h1>

    <p class="mt-6 max-w-[60ch] text-lg opacity-90">
      Proyecto real, medible y documentado para restaurar ecosistemas con impacto verificable.
    </p>

    <div class="mt-8 flex flex-wrap gap-4">
      <Button href="#historia">Conoce el proyecto</Button>
      <Button href="#apoyar" variant="secondary">
        Apoya la reforestación
      </Button>
    </div>
  </div>
</section>
8. Contenido
8.1 Markdown Editorial

src/content/pages/historia.md

---
title: "Historia del proyecto"
description: "Origen y propósito"
order: 1
---

Sembralas nace como un proyecto de reforestación con enfoque medible.
8.2 Data Estructurada

src/content/data/impacto.json

[
  { "numero": 0, "label": "Árboles sembrados" },
  { "numero": 0, "label": "Jornadas realizadas" },
  { "numero": 0, "label": "Voluntarios" }
]
9. Scripts
package.json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "format": "prettier . --write",
  "format:check": "prettier . --check"
}
10. Checklist Actual
Fase 0 — Infraestructura

 Repo conectado

 Prettier configurado

 Tailwind v4 funcionando

 Layout base estable

 Build OK

 Preview OK

Fase 1 — UI Base

 Button component

 SectionTitle component

 Card component

Fase 2 — Animación

 SectionReveal (IntersectionObserver)

 Aplicar fade-in global

Fase 3 — Contenido real

 Historia definitiva

 Impacto real

 Premios reales

 Jornadas reales

Fase 4 — Hero Premium

 Imagen AVIF optimizada

 Overlay elegante

 Parallax leve

11. Principios Técnicos

No hardcodear contenido si puede ir en data

No duplicar estilos

Todo componente UI reutilizable

Tailwind v4 → @import "tailwindcss";

Layout importa CSS desde frontmatter

Siempre reiniciar dev tras cambios estructurales

Estado Actual

Proyecto estable.
Base sólida.
Listo para animaciones y mejora visual premium.

Si quieres, ahora podemos generar:

📘 Documento estratégico de arquitectura (nivel profesional)

📊 Documento para presentar a terceros

📦 Plantilla de CONTRIBUTING.md

🚀 Roadmap técnico detallado por semanas
