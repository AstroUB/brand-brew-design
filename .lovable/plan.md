## Vessel® — Custom Bottle Packaging Site

Building from the chosen "Monolithic Premium" direction: white canvas, oversized Syne display type, Plus Jakarta body, black primary with blue accent, large product imagery, GSAP-driven 3D motion.

### Pages (TanStack Start routes)
- `/` — Home (long-scroll, 7 sections)
- `/catalog` — Full bottle range
- `/customize` — Upload + live preview workspace
- `/order` — Standalone order form
- `/about` — Studio story
- `/contact` — Inquiries

Each route gets its own `head()` with unique title/description/og tags.

### Home page sections (7)
1. **Hero** — "BOTTLED IDENTITY" oversized type, floating 3D bottle behind, CTA
2. **The Core Series** — Bottle catalog (4 variants, staggered grid)
3. **The Preview Lab** — Live upload-and-preview module with 3-step process
4. **Materials & Finishes** — Big imagery showcase of print techniques
5. **Why Vessel** — Stats / sustainability strip (recycled %, batch sizes, certifications)
6. **Brands We Bottle** — Logo wall / testimonial quote
7. **Order CTA + Form** — Contact form, then footer

### GSAP 3D motion
- Install `gsap` (ScrollTrigger plugin included in core import)
- Hero bottle: continuous slow rotation + scroll-tied tilt/parallax
- Section headlines: SplitText-style stagger reveal on scroll-into-view
- Catalog cards: 3D tilt on hover (rotateY/rotateX with perspective)
- Preview Lab bottle: rotates on drag, wraps uploaded artwork onto curved surface (CSS transform + mask for label illusion)
- Smooth scroll feel via GSAP ScrollSmoother-lite (lerp on scroll position)
- Order section: numbers count up, button magnetic hover

### Upload & Preview behavior
- File input accepts PNG/SVG/JPG (client-side validation, ≤5MB, zod schema)
- Selected image rendered as a wrapped label overlay on a bottle PNG with CSS `transform: perspective + rotateY` plus radial mask to simulate curvature
- Bottle continues rotating; label rotates with it
- "Apply to order" button passes selection to the order form

### Order form
- Fields: full name, company, work email, phone, bottle model (select), quantity (50–50,000 range), artwork file, notes
- Zod validation, inline errors, success toast
- Frontend-only submission for now (no backend) — shows confirmation state

### Design tokens (src/styles.css)
Port chosen direction verbatim:
- `--font-display: 'Syne'`, `--font-body: 'Plus Jakarta Sans'` (Google Fonts via root head links)
- `--background: oklch(1 0 0)`, `--foreground: oklch(0 0 0)`, `--muted: stone-50 equivalent`
- `--primary: #000`, `--accent: #3b82f6`
- `.text-outline` utility for stroked display type
- Generous radii, big section padding (py-40)

### Assets
Generate via `imagegen` (premium tier for hero bottle, fast for others):
- Hero bottle render (matte black, studio white)
- 4 catalog bottle renders (Monolith satin white, Nomad matte navy, Slim borosilicate, Grand 1L)
- Preview Lab bottle (curved surface, neutral)
- Materials/finish detail shot

### Components
- `src/components/Nav.tsx` — fixed mix-blend nav
- `src/components/Footer.tsx`
- `src/components/Hero.tsx`, `CoreSeries.tsx`, `PreviewLab.tsx`, `Materials.tsx`, `WhyVessel.tsx`, `Brands.tsx`, `OrderSection.tsx`
- `src/components/BottleViewer.tsx` — reusable rotating bottle w/ optional label overlay
- `src/components/OrderForm.tsx` — zod + react-hook-form
- `src/hooks/useGsapScroll.ts` — wraps GSAP context + ScrollTrigger cleanup

### Technical notes
- Install: `gsap`, `react-hook-form`, `@hookform/resolvers`, `zod` (already present)
- All GSAP usage inside `useGSAP` / `useEffect` with proper cleanup; SSR-safe (guard `typeof window`)
- Google Fonts via `<link>` in `__root.tsx` head
- All colors via semantic tokens; no hardcoded hex in components except brand accent token

### Out of scope (for this build)
- Real backend / Lovable Cloud (form is frontend-only with confirmation state)
- Auth, payments, order history
- True WebGL 3D (using GSAP + CSS transform illusion, not Three.js)
