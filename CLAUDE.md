@AGENTS.md

# CLAUDE.md — CuidaBien Sitio Promocional

## Qué es este proyecto
**cuidabiencr-web** es el sitio promocional de CuidaBien — un SaaS de gestión integral para hogares de cuido y organizaciones de salud en Costa Rica.

Este repo es **solo el sitio público de marketing** (cuidabiencr.com). La aplicación real vive en un repo separado (`salud`) y está en producción en **https://app.cuidabiencr.com**.

## Stack
- **Framework:** Next.js (App Router, JavaScript)
- **Estilos:** CSS Modules + variables CSS globales en `app/globals.css`
- **Fuentes:** DM Sans (cuerpo) + DM Serif Display (títulos) — cargadas desde Google Fonts en globals.css
- **Deploy:** Vercel (conectado a GitHub, auto-deploy desde `main`)

## Arrancar el servidor de desarrollo
```bash
npm run dev
```
Abre http://localhost:3000

## Paleta de colores CuidaBien
```
--primary:        #534AB7   (morado principal)
--primary-dark:   #3C3489   (hover / gradientes)
--primary-light:  #EEEDFE   (fondos suaves)
--primary-border: #AFA9EC   (bordes)
--green:          #1D9E75   (éxito / checks)
--yellow:         #D4A827   (precios / destacados)
--red:            #E24B4A   (errores)
--text:           #1a1a2e
--text-muted:     #6b6b8a
```

## Tipografía
- **Títulos y marca:** `font-family: 'DM Serif Display', serif`
- **Cuerpo y UI:** `font-family: 'DM Sans', sans-serif` (400, 500, 600, 700)
- NO usar Tailwind ni otras librerías de UI — solo CSS puro con las variables del proyecto

## Estructura actual
```
app/
  globals.css        — variables CSS globales, reset, fuentes
  layout.js          — metadata SEO, html lang="es"
  page.js            — Landing page principal (Hero, Features, Planes, CTA, Footer)
  page.module.css    — Estilos de la landing
public/
  (imágenes, íconos)
```

## Reglas de desarrollo
- **CSS Modules** para cada componente/página: `ComponentName.module.css`
- Usar siempre las variables `var(--primary)`, `var(--green)`, etc. — nunca colores hardcodeados
- Responsive obligatorio: cada grid desktop necesita su `@media (max-width: 767px)` en el mismo archivo
- Botones: `border-radius: 9px`, altura mínima `38-44px` para touch
- Cards: `border: 1px solid var(--primary-border)`, `border-radius: 16px`

## Secciones de la landing actual
1. **Navbar** — logo CB, links ancla, botón "Ingresar →" → app
2. **Hero** — badge, título DM Serif, descripción, 2 CTAs
3. **Funcionalidades** — grid de 8 cards con íconos
4. **Planes** — 4 planes con precios, el "Empresa Básico" destacado
5. **CTA final** — fondo morado degradado, botón blanco
6. **Footer** — brand + copyright

## Links importantes
```
App en producción:   https://app.cuidabiencr.com
Repo app (privado):  https://github.com/orromerop/salud
Repo sitio:          https://github.com/orromerop/cuidabiencr-web
Vercel deploy:       conectar en vercel.com con este repo
Cloudflare (dominio): dash.cloudflare.com  — cuidabiencr.com
```

## Planes actuales de CuidaBien (para mostrar en el sitio)
| Plan | Precio/mes | Usuarios | Pacientes |
|------|-----------|----------|-----------|
| Familiar Gratis | $0 | 2 | 1 |
| Familiar Básico | $10 | 3 | 2 |
| Familiar Intermedio | $25 | 10 | 5 |
| Empresa Básico | $40 | 20 | 10 |
| Empresa Professional | $100 | 100 | 25 |
| Empresa Business | $200 | 200 | 50 |
| Empresa Enterprise | $400 | 400 | 100 |

Descuento del 10% pagando anual.

## Qué viene después
- Testimonios de clientes reales
- Sección "¿Cómo funciona?" con pasos ilustrados
- Blog (Next.js con archivos Markdown o BD separada en Neon)
- Formulario de contacto
- Sección sobre el equipo
- Animaciones sutiles con CSS o Framer Motion
- Página `/blog/[slug]` para artículos

## Contacto del dueño
Oscar Romero — orromero@gmail.com
