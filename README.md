# Portafolio — Sergio Mellado Martín

Portfolio personal construido con [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com) + [React](https://react.dev), desplegable en Vercel.

Sitio estético con identidad cyber/terminal: tipografía mono, paleta púrpura neón + verde matrix, orbes animados de fondo, hexágonos para el grid de tecnologías y timeline vertical en experiencia.

## Stack

- **Astro 6** con adaptador de Vercel
- **Tailwind CSS v4** (plugin de Vite, tokens vía `@theme`)
- **React 19** (integración puntual)
- **TypeScript**
- i18n nativo de Astro (es por defecto, en bajo `/en`)

## Estructura

```
src/
├── components/
│   ├── sections/      # Hero, About, Experience, Skills, Certifications, Languages, Contact, ...
│   ├── ui/            # SectionTitle, Navbar, Logo, LangToggle
│   └── effects/       # TerminalTyping
├── content/
│   ├── es.json        # Contenido en español
│   └── en.json        # Contenido en inglés
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro    # ruta /
│   └── en/index.astro # ruta /en
├── scripts/
└── styles/
    └── global.css     # Tokens de Tailwind v4 + reset + utilidades
public/
├── avatar.png
├── cv.pdf
└── logos/             # Logos de empresas y tecnologías
```

## Comandos

| Comando            | Acción                                        |
| :----------------- | :-------------------------------------------- |
| `npm install`      | Instala dependencias                          |
| `npm run dev`      | Dev server en `http://localhost:4321`         |
| `npm run build`    | Build de producción a `./dist/`               |
| `npm run preview`  | Sirve el build local para preview             |

Node ≥ 22.12.0.

## Contenido

Todos los textos, logos y datos se centralizan en `src/content/{es,en}.json`. Las dos páginas (`/` y `/en`) consumen el mismo layout y componentes pasándoles el JSON correspondiente.

Para añadir una sección nueva: crea `src/components/sections/Mia.astro`, impórtala en `src/pages/index.astro` y `src/pages/en/index.astro`, y añade su clave a `nav` en los JSON.

## Licencia

Código bajo uso personal. Los assets (logos de empresas, certificaciones) son propiedad de sus respectivos dueños.
