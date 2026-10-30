# AGENTS.md

Next.js site for sasha.page. Run instructions live in [README.md](README.md).

## Source layout

- `app/`: homepage, shared content in `app/content/`, and metadata routes.
- `pages/`: admin upload screen at `pages/admin/portcos.tsx`, plus `_app` and `_document`.
- `components/`: homepage sections with CSS Modules.
- `system/`: admin UI primitives, modals, and layouts.
- `common/`: constants and utilities.

Imports use the `@root`, `@system`, `@common`, `@components`, and `@pages` aliases from `tsconfig.json`.

## Conventions

- Style with CSS Modules; global styles live in `global.css`.
- Match the formatting in `.prettierrc`. Prettier is not a project dependency.
- `package-lock.json` is ignored by Git, so installs resolve from `package.json`.
- TypeScript 7 has no `baseUrl` or `target: es5`. `next build` checks types through the TypeScript CLI.
- Leave commits to the owner.

## Verification

- `npm run build` compiles and type-checks. It can rewrite the tracked `next-env.d.ts`.
- `npx tsc --noEmit` type-checks alone. It rewrites the tracked `tsconfig.tsbuildinfo`.
- `npm audit` and `npm outdated` check dependencies.

There is no test suite or linter. Port 10000 may be in use by another project, so run servers on a free port and stop only the process you started.

## Skills

This repository has no skills yet. Find any added later by searching for `SKILL.md`, and follow those that apply. Keep a new skill focused on one workflow, using your agent platform's skill-authoring guidance.
