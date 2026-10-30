---
name: code-review
description: Review code changes for bugs, regressions, security issues, convention drift, and missing tests. Use when reviewing a pull request or diff in the Comify codebase.
---

# Code Review

## Overview

Reviews TypeScript changes across Comify's bounded contexts (`development/`, `testing/`, `deployment/`) for correctness, architectural integrity, and adherence to the conventions in the repository root [`AGENTS.md`](../../../AGENTS.md). For domain or UI code specifically, also cross-check against the `domain-implementation`, `domain-testing`, and `app-implementation` skills — this skill focuses on the cross-cutting checks that apply to every change.

## When to Use

Invoke this skill when asked to review a diff, pull request, or set of staged changes.

## Review Checklist

### TypeScript & formatting

- [ ] TypeScript strict mode compliance — no unjustified `any` (prefer `unknown` with narrowing); no new `as` assertions where a type guard would do
- [ ] Single quotes, semicolons on every statement, Allman brace style (see `AGENTS.md` → Code Style)
- [ ] One leading blank line at the top of the file, one blank line after the import block, one trailing blank line at EOF
- [ ] Imports ordered built-in → external → internal (`^/*`) → parent (`~/*`) → relative, alphabetized case-insensitively, no duplicates
- [ ] Inline type imports (`import { type Foo } from 'bar'`) rather than a separate `import type` statement
- [ ] No unused variables/imports, no stray `console.*` calls (use the shared `logger`)

### Architecture

- [ ] Bounded context boundaries are respected — no direct imports between `social`/`insights`/`moderation` domains; cross-context communication goes through `development/common/domain/<topic>/<event>` event contracts
- [ ] Domain logic doesn't leak into the app layer, and UI concerns don't leak into domain use cases
- [ ] New/changed domain use cases are registered with the correct `access` level in the relevant `deployment/segments/<context>.*.json` file
- [ ] Side effects (DB, file store, event publishing) are isolated in small, named helper functions rather than inlined
- [ ] State-changing use cases that publish an event `await` the publish and roll back on failure instead of firing-and-forgetting

### Tests

- [ ] New/changed public use cases have a matching `testing/<context>/domain/<feature>/<use-case>.spec.ts`
- [ ] Domain tests use real `database`/`eventBroker`/`fileStore` integrations and fixture seed helpers — no `vi.mock()`
- [ ] App/UI tests (if any) mock the domain layer and `requester` with `vi.mock()` rather than hitting real integrations
- [ ] Happy path, error, and ownership/authorization cases are covered where applicable
- [ ] `npm run test` and `npm run lint` pass for every affected workspace

## References

- [Project AGENTS.md](../../../AGENTS.md) — Full project conventions and setup
- [`.agents/skills/domain-implementation/SKILL.md`](../domain-implementation/SKILL.md)
- [`.agents/skills/domain-testing/SKILL.md`](../domain-testing/SKILL.md)
- [`.agents/skills/app-implementation/SKILL.md`](../app-implementation/SKILL.md)
