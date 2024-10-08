## Commit Message Types

- **feat**: Add new features or functions.
- **fix**: Fix issues or bugs.
- **perf**: Optimize performance.
- **style**: Change the code style without affecting the running result.
- **refactor**: Re-factor code without changing the external behavior.
- **revert**: Undo previous changes.
- **test**: Add or update tests without affecting business logic.
- **docs**: Update documentation or add comments/annotations.
- **chore**: Update dependencies or modify configuration, scaffolding, etc.
- **workflow**: Improve or update workflows.
- **ci**: Continuous Integration/Continuous Deployment (CICD) related changes.
- **types**: Define or update TypeScript types.
- **wip**: Work in progress, still in development.

# todo_app_test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```
