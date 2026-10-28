---
name: code-review
description: Review code changes for bugs, regressions, security issues, and missing tests.
---

# Code Review Skill

## Overview

This skill guides thorough code reviews for the Comify project, an open-source social media platform that leverages comics for communication. Reviews should validate TypeScript compliance, architectural integrity, and adherence to project conventions defined in `AGENTS.md`.

## Setup

Review against the active `AGENTS.md` in the repository root. Reference the project structure:
- `development/` — Bounded contexts (`social`, `insights`, `moderation`, etc.)
- `testing/` — Mirrors `development/` structure for test files
- `deployment/` — Jitar runtime configuration (services, segments, resources)
- `common/` — Shared utilities and core modules

---

## 1. TypeScript & Language Compliance

### Strict Mode
- **TypeScript strict mode** is enabled — all `noImplicit*` flags are on.
- **No `any` types** without explicit justification and a comment explaining why.
- Prefer `unknown` over `any` when the type is truly untyped.
- Use type guards or narrowing instead of `as` assertions where possible.

### Formatting Rules
- **Single quotes** only (`'text'`, not `"text"`).
- **Always use a semicolon** at end of statements.
- **No unused variables** or imports.

### Import Ordering
Imports must follow this exact order, alphabetically sorted within each group, case-insensitive:
1. Built-in Node.js modules
2. External packages
3. Internal `@theshelf/*` packages
4. Internal `@jitar-plugins/*` packages
5. Internal project imports (`common/`, context-specific modules)
6. Relative imports

No duplicate imports. One blank line after the import block. Inline type imports preferred (e.g., `import type { Foo } from 'bar'`).

### Review Checklist
- [ ] TypeScript strict mode enforced
- [ ] No unjustified `any` types
- [ ] Single quotes used, no semicolons
- [ ] Imports properly ordered, sorted, no duplicates
- [ ] One blank line after imports
- [ ] One blank at the start of the file
- [ ] One blank at the end of the file
