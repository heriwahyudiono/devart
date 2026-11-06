# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint for the Home page; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Home page application component (DevArt Website design)
- `src/index.css` - Home page CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell for the Home page containing the `#root` element and loading `src/main.tsx`
- `src/services/main.tsx` - React entrypoint for the Services page; imports `src/services/index.css` and mounts `src/services/App.tsx`
- `src/services/App.tsx` - Services page application component (DevArt Website (1) design)
- `src/services/index.css` - Services page CSS entrypoint and Tailwind CSS v4 import
- `services.html` - Vite HTML shell for the Services page containing the `#root` element and loading `src/services/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and Figma Make plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Responsive Layout

Both pages are built mobile-first: the base CSS targets phones, and larger layouts are layered on with `min-width` media queries.

- Home (`src/index.css`): mobile base below 821px, desktop layout from 821px, tablet refinements between 821px and 1100px. Above 1100px the layout is the original desktop design.
- Services (`src/services/index.css`): mobile base below 901px, desktop layout from 901px, tablet refinements between 901px and 1100px. Above 1100px the layout is the original desktop design.
- Keep the desktop design unchanged when editing breakpoints. Mobile navigation reuses the existing `menuOpen` state in each `App.tsx`.

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

The Home and Services pages use the same design class names (`.hero`, `.action-button`, `.project-card`, and so on) with different styles. Keep each page's CSS imported only by its own entry file (`src/main.tsx` and `src/services/main.tsx`) so Vite emits one stylesheet per page and the two designs never override each other.

Tailwind emits utility classes in `@layer utilities`, and CSS outside any cascade layer overrides every layer regardless of specificity. Put global element styles, such as resets and defaults for `body`, headings, `button`, or `input`, inside `@layer base { ... }` so utility classes on those elements still apply. Tailwind's Preflight already applies `box-sizing: border-box`, removes default margins, and sets `font: inherit` on form controls, so do not repeat those rules.
