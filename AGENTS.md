# AGENTS.md

## Project Overview

Comify is an open-source social media platform that leverages comics for communication. The concept: take or upload a picture, add speech bubbles, and share with others. Comics can be liked, and users can react with comments or other comics.

**Tech Stack:**
- **Runtime:** Jitar (distributed runtime)
- **Backend:** Node.js with TypeScript (strict mode)
- **Frontend:** React 19 with React Router DOM 7
- **Database:** MongoDB (via @theshelf/database)
- **Authentication:** Keycloak (OpenID Connect via @theshelf/authentication)
- **File Storage:** SeaweedFS (S3-compatible via @theshelf/files)
- **Event Broker:** Kafka (via @theshelf/events)
- **Bundler:** Vite
- **Testing:** Vitest with coverage (V8)

**Key Dependencies:**
- `jitar` — core distributed runtime
- `@jitar-plugins/*` — authentication, database, events, files, http, notification
- `@theshelf/*` — authentication, connection, database, events, files, http, logging, notification, validation
- `@maskingtech/*` — designsystem, react-toolkit

## Prerequisites

- **Node.js** version 24+ (enforced via `engines` in package.json)
- **Docker** and **docker-compose** for local services
- **npm** package manager (v11.16.0)

## Setup Commands

### Initial Setup

```bash
# 1. Copy environment configuration
cp example.env development.env

# 2. Install dependencies
npm install

# 3. Start Docker services
npm run docker-up
```

### Build & Run

```bash
# Build the project (compile + bundle)
npm run build

# Start the demo application (port 3000)
npm run demo
```

### Development

```bash
# Start backend in development mode
npm run dev

# Start frontend in development mode (same for other packages)
cd development/social
npm run dev
```

### Production Deployment

```bash
# Build and create distribution
npm run build
npm run dist

# Start with PM2 using ecosystem config
npm run prod-start

# Other PM2 commands
npm run prod-stop       # Stop all services
npm run prod-down       # Delete PM2 process group
npm run prod-list       # List running processes
npm run prod-monitor    # Monitor resource usage
```

## Project Structure

```
artifacts/
├── build/          # Compiled TypeScript code to JavaScript
└── dist/           # Distributable bundles

deployment/
├── docker/         # Service configurations (Keycloak, MongoDB, SeaweedFS, Kafka)
├── resources/      # Configuration for shared resource between segments (Jitar)
├── segments/       # Segment configuration for creating the distributable bundles (Jitar)
└── services/       # Service configuration for running the distributable bundles (Jitar)

development/
├── common/         # Shared utilities and core modules
├── insights/       # Bounded context for insights/analytics
├── social/         # Bounded context for social features (main app)
├── moderation/     # Bounded context for content moderation
└── */              # Other bounded contexts with source code

documentation/
└── diagrams/       # Design diagrams

testing/
├── common/         # Tests for shared utilities
├── insights/       # Tests for insights bounded context
├── social/         # Tests for social bounded context
├── moderation/     # Tests for moderation bounded context
└── */              # Mirrors development/ structure
```

## Docker Services

When you run `npm run docker-up`, the following services start:

| Service | Port | Purpose |
|---------|------|---------|
| Keycloak | 8080 | Authentication (OpenID Connect) |
| MongoDB | 27017 | Data persistence |
| SeaweedFS | 8888 | File/image storage (S3-compatible) |
| Kafka | 9092 | Event streaming |

Configuration is in `docker-compose.yml`.
Services expose ports on localhost, and data persists via Docker volumes.

## Code Style

### General Rules

- **TypeScript strict mode** enabled
- **Single quotes** only, no semicolons
- **Functional patterns** preferred (pure functions, immutable data)
- **Higher-order functions** (`map`, `filter`, `reduce`) over loops
- **Composition** over inheritance
- **Consistent formatting** via ESLint + Prettier
- **Import ordering**: Built-in → External → Internal → Relative (case-insensitive, alphabetically sorted)
- **No duplicate imports**
- **One blank line** after imports
- **Inline type imports** preferred

### Linting

- **ESLint** with TypeScript parser (`@typescript-eslint`)
- **Imports plugin** for module resolution
- **React** hooks and JSX linting
- **Vitest** plugin for test file linting
- **Jitar** plugin for framework-specific rules

## Testing

### Framework

- **Vitest** — Fast unit and integration testing framework
- **Testing Library** — Component testing with React hooks
- **Node** environment for backend tests

### Running Tests

```bash
npm run test              # Run all tests (logic + app)
```

### Test Conventions

- **Naming:** `<module>.spec.ts` (e.g., `toggle.spec.ts`, `create.spec.ts`, `login.spec.ts`)
- **Structure:** `describe` → `it` → setup → act → assert
- **Mocks:** Use `vi.mock()` for external dependencies (Keycloak, MongoDB, SeaweedFS, etc.)
- **Domain imports:** Import the specific domain function being tested (e.g., `create`, `toggleRating`, `establishRelation`)
- **Async code:** Use `await` with standard Vitest assertions (e.g., `expect(...).resolves`, `expect(...).rejects`)
- **Fixtures:** Keep test data in separate files or inline factories
- **Coverage:** Aim for high coverage on use-cases

### Environment Variables

Required variables in `development.env`:

- `KEYCLOAK_*` — Keycloak authentication settings (URL, realm, client ID, secret)
- `MONGODB_*` — MongoDB connection details (host, port, database name)
- `SEAWEDFS_*` — SeaweedFS storage settings (host, port, bucket name)
- `KAFKA_*` — Kafka broker configuration (host, port, topic names)
