---
name: planning
description: Turn a feature request, bug report, or refactor into a concrete, reviewable implementation plan before writing code. Use at the start of any non-trivial task in Comify, especially while in plan mode, before handing off to domain-implementation, app-implementation, domain-testing, or code-review.
---

# Planning

## Overview

Guides turning a vague request ("add X", "fix Y", "support Z") into a concrete, scoped, and reviewable plan for the Comify codebase **before** any code is written. A good plan identifies the bounded context(s) affected, the layers touched (domain, app, tests, deployment segments), the exact files to add/change, the order of operations, and the open questions that need an answer first. This skill is the entry point that feeds into `domain-implementation`, `app-implementation`, `domain-testing`, and `code-review` — it does not duplicate their conventions, it sequences them.

> **Scope:** Producing and validating a plan. Writing the actual domain/app/test code is out of scope — once a plan is agreed, hand off to the matching implementation skill.

## When to Use

Invoke this skill:
- At the start of any task that touches more than one file, more than one layer (domain/app/tests), or more than one bounded context
- Whenever operating in **plan mode** (explore, analyze, align — no edits), before any `act`/`yolo` mode work begins
- When a request is ambiguous about scope, bounded context ownership, or acceptance criteria
- Before a refactor or migration that could ripple across `development/common` and multiple contexts
- When asked to "plan", "design", "scope", or "break down" a feature, or to review an existing plan for gaps

Skip it only for truly trivial, single-file, single-layer changes (typo fixes, a one-line config tweak) where the implementation skill's own workflow is enough.

## Prerequisites

Before producing a plan, gather:

1. **The raw request** — the user's own words; don't paraphrase away constraints or examples they gave
2. **Repository conventions** — [`AGENTS.md`](../../../AGENTS.md) for code style, project structure, and testing conventions
3. **The relevant implementation skill(s)** — skim `domain-implementation`, `app-implementation`, and `domain-testing` so the plan's steps map onto their actual workflows instead of inventing new ones
4. **Current mode** — plan mode means the output of this skill is the deliverable (no edits); act/yolo mode means the plan is a short internal step before implementing

## Workflow

### 1. Clarify the Ask

1. Restate the goal in one or two sentences and identify the **type** of change: new feature, extension of an existing feature, bug fix, or refactor
2. List any **ambiguities** that materially change scope or design (e.g. "should this be visible to non-owners?", "does this need a new event?", "which bounded context owns this?")
3. If an ambiguity has more than one reasonable answer and picking wrong means rework, use the `ask_question` tool with concrete options instead of assuming — do this **before** exploring further, not after a plan is half-written
4. If the ambiguity is minor (naming, ordering) or has an obvious convention-driven answer, resolve it yourself by following existing patterns and note the assumption in the plan instead of asking

### 2. Map the Request onto the Codebase

1. **Identify the bounded context(s)** — `social`, `insights`, `moderation`, `common`, or a new one — using the Project Structure section of `AGENTS.md` and the context map in `documentation/diagrams/context.cml` / `workspace.dsl` if the boundary is unclear
2. **Find the closest existing analog** — search `development/<context>/domain` and `development/<context>/app/components` for a feature that is structurally similar (same shape of CRUD, same kind of relationship, same kind of form) to mirror rather than invent from scratch
3. **Identify every layer touched**, and only those:

   | Layer | Touched when... | Skill to use |
   |-------|------------------|--------------|
   | Domain (`development/<context>/domain`) | New/changed business logic, records, use cases, events | `domain-implementation` |
   | Domain tests (`testing/<context>/domain`) | Any new/changed public use case | `domain-testing` |
   | App (`development/<context>/app`) | New/changed UI, routes, hooks | `app-implementation` |
   | Shared (`development/common`) | Cross-context event contracts, shared primitives/utilities | `domain-implementation` conventions, used read-only by other contexts |
   | Deployment (`deployment/segments/<context>.*.json`) | Any new/changed public use case or protected helper | Registration step inside `domain-implementation` |

4. **Check bounded context boundaries** — if the feature seems to need direct access to another context's domain code, it doesn't; route it through a `development/common/domain/<entity>/<event>` event contract instead (see `domain-implementation`'s Step 6)
5. **Trace dependencies** — note which shared services the feature touches (Keycloak, MongoDB, SeaweedFS, Kafka) and which existing use cases/components it will call or extend, so the plan can sequence "build the thing it depends on" before "build the thing"

### 3. Decompose into Steps

Break the work into an ordered, numbered list of concrete steps, each scoped to a single file or tightly-related group of files. Order matters — downstream layers depend on upstream ones:

1. Domain model/record changes (`definitions.ts`) — if the shape of data is changing
2. Domain use case(s) — one step per use case, inner-to-outer (helpers like `_create`/`_toModel` before the public use case that composes them)
3. Event contract (if a new cross-context event is needed) — defined in `development/common/domain/<entity>/<event>` before any context publishes/subscribes to it
4. Segment registration — add the new public use case (and any newly extracted protected helper) to the correct `deployment/segments/<context>.*.json`
5. Domain tests — one `.spec.ts` per new/changed public use case, covering happy path, error cases, and ownership/authorization
6. App layer — hooks first (data fetching/mutation), then components, then routes, then barrel (`index.ts`) exports
7. App tests, if introduced for the touched area
8. Manual verification — `npm run lint` and `npm run test` for every affected workspace

For a small bug fix or single-use-case addition, this list collapses to 2-4 steps; don't pad it artificially. For a multi-context feature, group steps under a subheading per bounded context.

### 4. Define Acceptance Criteria

For each major capability in the plan, write a short, checkable acceptance criterion (what should be true when it's done — not how). Reuse the relevant implementation skill's checklist as the baseline instead of restating its contents:

- Domain work is "done" when `domain-implementation`'s checklist passes
- Tests are "done" when `domain-testing`'s checklist passes
- UI work is "done" when `app-implementation`'s checklist passes
- The whole change is "done" when `code-review`'s checklist passes

### 5. Surface Risks and Open Questions

Call out explicitly, rather than glossing over:

- **Breaking changes** — renamed/removed fields on a `Record` or domain model that existing callers rely on
- **Event compensation** — any new state-changing use case that publishes an event must roll back on publish failure; flag if this adds a new rollback path
- **Migration needs** — new required fields on an existing `Record` type need either a default, a migration step, or an optional (`?`) marker
- **Scope creep candidates** — adjacent improvements that are tempting but not part of this request; list them as "out of scope" rather than silently doing or silently dropping them

### 6. Present the Plan

Present the plan using the template below. In **plan mode**, this is the full deliverable — stop here and wait for approval or answers to open questions; do not start editing files. In **act/yolo mode**, present a condensed version (steps + acceptance criteria) inline and proceed directly into execution using the matching implementation skills.

## Plan Document Template

```markdown
## Goal
<One or two sentences: what this change accomplishes and why.>

## Context
- Bounded context(s): <social | insights | moderation | common | new>
- Closest existing analog: <feature/path mirrored, if any>
- Layers touched: <domain | domain tests | app | common | deployment segments>

## Assumptions / Resolved Ambiguities
- <Assumption and why it's reasonable, or link to the user's answer>

## Open Questions
- <Only if something genuinely blocks a correct plan — otherwise omit this section>

## Steps
1. <File/module> — <what changes and why>
2. ...

## Acceptance Criteria
- <Checkable outcome, mapped to the relevant skill's checklist>

## Risks / Out of Scope
- <Breaking changes, migration needs, explicitly excluded adjacent work>
```

## Checklist

Before presenting a plan as ready, verify:

- [ ] The request's ambiguities were either resolved via `ask_question` (when consequential) or stated as explicit assumptions (when minor)
- [ ] Every bounded context the plan touches is named, and no step reaches across contexts except through a `development/common/domain/<entity>/<event>` contract
- [ ] Every step maps to exactly one implementation skill (`domain-implementation`, `app-implementation`, `domain-testing`) and is ordered so dependencies come first
- [ ] Segment registration (`deployment/segments/<context>.*.json`) is called out as a step whenever a new public use case or protected helper is introduced
- [ ] Test coverage (domain `.spec.ts`, and app tests if applicable) is an explicit step, not an afterthought
- [ ] Acceptance criteria are checkable and reuse the implementation skills' own checklists rather than re-describing them
- [ ] Risks (breaking changes, event-publish compensation, migrations) and explicitly out-of-scope adjacent work are called out
- [ ] In plan mode, no files were edited and no state-changing commands were run while producing the plan

## Common Pitfalls

1. **Planning in isolation from the codebase** — writing steps from memory instead of first finding the closest existing analog leads to plans that fight the project's conventions (dot-notation features, Record/Domain Model split, barrel exports).
2. **Skipping segment registration** — a plan that adds a use case but forgets the `deployment/segments/*.json` step produces code that compiles and passes local tests but isn't callable.
3. **Under-specifying tests** — "add tests" is not a step; name the spec file path and the scenarios (happy path, error, ownership) it must cover.
4. **Asking too many or too few questions** — batch genuinely blocking ambiguities into one `ask_question` call with concrete options; don't ask about things the codebase's own conventions already answer.
5. **Conflating plan mode with analysis paralysis** — a plan should be proportional to the task; a one-file bug fix doesn't need the full template, just a short restatement and a 2-3 step list.
6. **Ignoring bounded context boundaries in the plan** — a step that says "import from `social` domain into `moderation`" is a design smell the plan should catch and reroute through an event contract, not something to defer to code review.
7. **Treating the plan as a scope guarantee** — if new information discovered mid-implementation invalidates the plan (e.g. the "closest analog" turns out not to fit), revise and re-present it rather than silently diverging.

## References

- [Project AGENTS.md](../../../AGENTS.md) — Full project conventions, structure, and setup
- [`.agents/skills/domain-implementation/SKILL.md`](../domain-implementation/SKILL.md) — Domain use-case implementation, consumed by plan steps for backend work
- [`.agents/skills/domain-testing/SKILL.md`](../domain-testing/SKILL.md) — Domain integration test conventions, consumed by plan steps for test coverage
- [`.agents/skills/app-implementation/SKILL.md`](../app-implementation/SKILL.md) — UI feature implementation, consumed by plan steps for frontend work
- [`.agents/skills/code-review/SKILL.md`](../code-review/SKILL.md) — Cross-cutting checklist used to validate the plan's acceptance criteria
- [`documentation/diagrams/context.cml`](../../../documentation/diagrams/context.cml) / [`workspace.dsl`](../../../documentation/diagrams/workspace.dsl) — Bounded context map for unclear ownership questions
