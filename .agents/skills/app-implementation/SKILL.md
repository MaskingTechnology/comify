---
name: app-implementation
description: Implement frontend/UI features (React components, hooks, routing) under development/<context>/app in Comify. Use when adding or extending user-facing features in the social app or another bounded context's app layer.
---

# App Implementation

## Overview

Guides the implementation of **UI features** for the Comify application — frontend-only feature implementation (React components, hooks, routing), user interface, interactions, local/global state, and domain data integration, under `development/<context>/app`. Code style (quotes, semicolons, brace style, import ordering) follows the repository root [`AGENTS.md`](../../../AGENTS.md); this skill documents the app-layer-specific architecture on top of it.

> **Scope:** UI feature implementation only. Domain logic (use-cases, gateways, repositories) is handled by the `domain-implementation` skill.

## When to Use

Invoke this skill when implementing **user-facing features** — anything the user sees or interacts with in the browser, under `development/<context>/app`.

### What's IN scope

| Category | Examples |
|----------|----------|
| **Components** | Panels, forms, lists, modals, tabs, menus, loading/result containers |
| **Pages/Routes** | Timeline, explore, post details, create post, creator profile, account settings |
| **Hooks** | `usePost`, `useTogglePostRating`, `useExplorePosts`, `useEstablish` |
| **Domain data integration** | Calling domain use-case functions (e.g. `^/domain/post/getById`) via the shared `requester` |
| **State** | Local component state, `AppContext` (identity, app state), URL/route state |
| **Routing** | React Router routes composed per feature (`Routes.tsx`), `ProtectedRoute`, layouts |
| **Forms** | Submission via the shared `Form` component and `useForm` hook, native field validation |
| **Accessibility** | Relies on `@maskingtech/designsystem` primitives for accessible building blocks |

### What's OUT of scope

| Category | Handled by |
|----------|-----------|
| **Domain logic / use-cases** | `domain-implementation` skill |
| **Database operations** | Backend services (`@theshelf/database`) |
| **Authentication** | `@theshelf/authentication` (consumed via `ProtectedRoute` / `AppContext`) |
| **File uploads** | `@theshelf/files` |
| **Event publishing** | `@theshelf/events` |
| **Backend API routes** | Backend services |

## Prerequisites

Before implementing a UI feature, ensure:

- The domain logic (use-case function, domain model/types) is already implemented under `development/<context>/domain` (see `domain-implementation` skill)
- The feature name and requirements are clear, and you know which bounded sub-feature it belongs to (see naming convention below)
- Design system components from `@maskingtech/designsystem` and helper hooks from `@maskingtech/react-toolkit` are identified for reuse

## Workflow

### 1. Feature Discovery

1. **Read the feature specification** — understand the user story and acceptance criteria
2. **Check existing UI patterns** — browse `development/<context>/app/components` for a similar feature folder to mirror (e.g. `post.rating` for a toggle-style engagement, `creator.account` for forms)
3. **Identify domain dependencies** — find the use-case function(s) under `development/<context>/domain/<feature>` that the UI needs to call, and the domain model types they return
4. **Determine state needs** — most data is server state fetched on demand via `useLoadData`/`usePagination` from `@maskingtech/react-toolkit`; only identity/app-wide state goes through `AppContext`

### 2. Feature Scaffolding

Real app features live directly under `development/<context>/app/components`, named per bounded sub-feature using **dot notation** when a feature is a satellite of a larger one (e.g. `post` + `post.rating` + `post.comic` + `post.reaction`, or `creator` + `creator.account` + `creator.profile`):

```
development/<context>/app/components/<feature>/
├── <RouteName>.tsx                 # Top-level route components (Main, Create, Details, Routes, ...)
├── Routes.tsx                      # React Router <Route> tree for this feature, exported as default
├── components/
│   ├── <ComponentName>.tsx         # Sub-components used by the route components
│   ├── elements/
│   │   └── <ElementName>.tsx       # Small leaf/presentational components
│   └── hooks/
│       └── use<Thing>.ts           # Hooks scoped to a single sub-component
├── hooks/
│   └── use<Action>.ts              # Feature-level hooks (data fetching, mutations, navigation)
└── index.ts                        # Barrel export (components/hooks used by other features + default Routes)
```

Real examples from `development/social/app/components`:

- `post/` — `Create.tsx`, `Details.tsx`, `Explore.tsx`, `Following.tsx`, `Highlight.tsx`, `Main.tsx`, `Reactions.tsx`, `Recommended.tsx`, `Remove.tsx`, `Routes.tsx`, plus `components/` (`DetailsPanel.tsx`, `LargePanel.tsx`, `PanelGrid.tsx`, `PanelList.tsx`, `SmallPanel.tsx`, `elements/EngagementRow.tsx`) and `hooks/` (`usePost.ts`, `useCreatorPosts.ts`, `useExplorePosts.ts`, `useRemovePost.ts`, ...)
- `post.rating/` — `components/Engagement.tsx`, `components/elements/Icon.tsx`, `components/hooks/useEngagement.ts`, `hooks/useTogglePostRating.ts`
- `creator.account/` — `Edit.tsx`, `Main.tsx`, `Routes.tsx`, `components/FullNameForm.tsx`, `components/NicknameForm.tsx`, `components/hooks/useFullNameFormHandler.ts`, `hooks/useUpdateFullName.ts`

There is **no `api/`, `types/`, or `validation/` folder** in the app layer. Data shapes are imported straight from the domain package (see below), and submissions are validated by domain use-cases plus native HTML form attributes (`required`, `limit`, ...).

### 3. Path Aliases & Domain Integration

The app layer never implements its own API client — it calls domain use-case functions directly, passing a shared `requester`:

```typescript
// development/social/app/components/post/hooks/usePost.ts

import { useLoadData } from '@maskingtech/react-toolkit';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { requester } from '@comify/common/security';

import getPost from '^/domain/post/getById';

export default function usePost()
{
    const { postId } = useParams();

    const getData = useCallback(async () =>
    {
        return postId !== undefined
            ? getPost(requester, postId)
            : undefined;
    }, [postId]);

    return useLoadData(getData, [postId]);
}
```

Path aliases (configured in `development/<context>/app/tsconfig.json`):

- `^/*` → the bounded context root (so `^/domain/post`, `^/domain/relation`, ...)
- `~/*` → the app folder itself (so `~/components/common`, `~/components/application`, ...)
- `@comify/common/*` → the shared `development/common` package (e.g. `@comify/common/security` for `requester`)

Domain types (e.g. `Post`, `Relation`, `Creator`) are imported with `import { type X } from '^/domain/<feature>'` and reused as-is for component props — there is no separate app-level type layer.


### 4. Component Conventions

Components use **anonymous default-exported functions** with an inline, readonly `Props` type — not named exports or `interface`:

```typescript
// development/social/app/components/post.rating/components/Engagement.tsx

import { ClickArea, Row } from '@maskingtech/designsystem';

import { CompactNumber } from '~/components/common';

import Icon from './elements/Icon';
import useEngagement, { type EngageHandler } from './hooks/useEngagement';

type Props = {
    readonly isEngaged: boolean;
    readonly count: number;
    readonly onClick: EngageHandler;
};

export default function ({ isEngaged, count, onClick }: Props)
{
    const [isRated, ratingCount, handleClick] = useEngagement(isEngaged, count, onClick);

    return <ClickArea onClick={handleClick}>
        <Row gap='small' alignX='left' alignY='center'>
            <Icon isRated={isRated} />
            <CompactNumber value={ratingCount} />
        </Row>
    </ClickArea>;
}
```

Page/route components follow the same pattern but typically have no props and read from `useParams`/`useOutletContext` instead (e.g. `post/Details.tsx`, `creator.account/Edit.tsx`).

### 5. Routing Conventions

Each feature exports its route tree as a JSX `<Route>` fragment (not a React Router object config), composed bottom-up:

```typescript
// development/social/app/components/post/Routes.tsx

import { Route } from 'react-router-dom';

import reactionRoutes from '~/components/post.reaction';

import Create from './Create';
import Details from './Details';
import Highlight from './Highlight';
import Main from './Main';
import Remove from './Remove';

export default <Route path='' element={<Main />}>
    <Route path='create' element={<Create />} />
    <Route path=':postId' element={<Details />}>
        <Route path='reactions'>{reactionRoutes}</Route>
        <Route path='remove' element={<Remove />}></Route>
    </Route>
    <Route path=':postId/highlight/:highlightId' element={<Highlight />}>
        <Route path='remove' element={<Remove />}></Route>
    </Route>
</Route>;
```

These per-feature `Routes.tsx` are mounted under a path prefix in the top-level `development/<context>/app/components/Routes.tsx`, inside a `ProtectedRoute` + `ApplicationLayout` wrapper for authenticated areas, or a `GuestLayout`/`LegalLayout` for public ones. There is no router-level lazy loading or route-guard HOC beyond `ProtectedRoute`, which simply renders `<Login />` when `identity` is `undefined` in `AppContext`.


### 6. State Management

- **Server/data state:** fetched on-demand via `@maskingtech/react-toolkit` hooks — `useLoadData` for single-resource loads, `usePagination` for infinite lists — wrapping a domain use-case call
- **Global app state:** `AppContext` (React Context) exposes `identity` (the current `Creator`), `setIdentity`, and a generic `appState` map; provided once by `AppContextProvider` in `App.tsx`
- **Local UI state:** plain `useState` inside small hooks colocated with the component that needs it (e.g. `post.rating/components/hooks/useEngagement.ts` for optimistic rating counts, `relation/components/hooks/useEstablish.ts` for a follow-button's pending state)
- **Forms:** the shared `Form` component (`~/components/common`) wraps `@maskingtech/designsystem`'s `Form` and the `useForm` hook from `@maskingtech/react-toolkit`, which tracks `dirty`/`submitting` state and calls `onSubmit(data: FormData)`

No Zustand, Jotai, React Query, Tailwind, CSS modules, or styled-components are used anywhere in the app layer — styling is limited to `@maskingtech/designsystem` components plus two global stylesheets (`components/theme.css`, `components/main.css`).

### 7. Barrel Exports

Every feature folder has an `index.ts` that re-exports the pieces other features are allowed to consume, and — by convention — the feature's `Routes.tsx` as the default export:

```typescript
// development/social/app/components/post.rating/index.ts

export { default as Engagement } from './components/Engagement';

export { default as useToggle } from './hooks/useTogglePostRating';
```

```typescript
// development/social/app/components/post/index.ts

export { default as Creator } from './Creator';
export { default as Explore } from './Explore';
export { default as Following } from './Following';
export { default as Recommended } from './Recommended';

export { default } from './Routes';
```

Cross-feature imports always go through this barrel (`~/components/post.rating`), never by reaching into another feature's internal folders.

### 8. Testing

There are currently **no UI test files** under `development/<context>/app` or `testing/<context>`. When adding tests for app code, follow the project-wide convention from `AGENTS.md` and mirror the structure used for domain tests:

- Place tests under `testing/<context>/app/...`, mirroring the `development/<context>/app/...` path of the file under test
- Name test files `<module>.spec.ts(x)`, structured `describe` → `it` → setup → act → assert
- Mock `@comify/common/security` (`requester`) and domain use-case functions with `vi.mock()` rather than hitting real Keycloak/MongoDB/SeaweedFS/Kafka
- Run tests with `npm run test` (Vitest) from the repo root

## Checklist

Before marking a UI feature complete, verify:

- [ ] The feature folder follows the dot-notation convention and sits under `development/<context>/app/components`
- [ ] Data is fetched/mutated by calling domain use-case functions with `requester` from `@comify/common/security` — no bespoke `api/` client was created
- [ ] Domain types are imported from `^/domain/<feature>`, not redeclared
- [ ] Components use anonymous default exports with an inline `readonly` `Props` type
- [ ] New routes are exported as a `<Route>` JSX fragment from the feature's `Routes.tsx` and mounted in the parent `Routes.tsx`
- [ ] Reusable pieces are re-exported from the feature's `index.ts`; other features import only through that barrel
- [ ] Styling relies on `@maskingtech/designsystem`, not ad-hoc CSS/Tailwind/styled-components
- [ ] Code follows the formatting rules in `AGENTS.md` (single quotes, semicolons, Allman braces, import ordering, leading/trailing blank lines)

## References

- [Project AGENTS.md](../../../AGENTS.md) — Full project conventions and setup
- [`.agents/skills/domain-implementation/SKILL.md`](../domain-implementation/SKILL.md) — Implementing the domain use cases this skill's UI consumes
- [React Router documentation](https://reactrouter.com/) — Route composition patterns used in `Routes.tsx`
- [Vitest documentation](https://vitest.dev/) — Testing framework

