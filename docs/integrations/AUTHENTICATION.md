
# Authentication | Comify docs

The authentication integration provides a universal interaction layer with an actual identity provider solution.

This integration is based on the following authentication flow:

1. Browser redirects to the IDP login page.
2. User authenticate at the IDP.
3. IDP provides identity information to this integration.
4. This integration starts a session based on the provided identity.
5. Sessions can be refreshed via this integration.
6. Until the user logs out via this integration.

## Implementations

Currently, there is only one implementation:

* **OpenID** - persistent document storage (used in production).

## Configuration

The used implementation needs to be configured in the `.env` file, together with the client URL.

```env
AUTHENTICATION_IMPLEMENTATION="openid"
AUTHENTICATION_CLIENT_URI="http://localhost:5173/identify"
```

In case of OpenID, additional configuration is required.

```env
OPENID_ISSUER="http://localhost:8080/realms/comify"
OPENID_CLIENT_ID="openid"
OPENID_CLIENT_SECRET=""
OPENID_REDIRECT_URI="http://localhost:3000/rpc/domain/authentication/login"
OPENID_ALLOW_INSECURE_REQUESTS=true
```

## How to use

An instance of the configured identity provider implementation can be imported for performing authentication operations.

```ts
import identityProvider from '^/integrations/authentication';

// Perform operations with the identityProvider instance
```

### Operations

```ts
import identityProvider, { Session } from '^/integrations/authentication';

// Open connection
await identityProvider.connect();

// Close connection
await identityProvider.disconnect();

// Request the URL of the login page
const loginUrl: string = await identityProvider.getLoginUrl();

// Handle a login and get a session
// Throws LoginFailed if not successful
const firstSession: Session = await identityProvider.login(providedIdentity);

// Refresh a session
// Throws LoginFailed if not successful
const secondSession: Session = await identityProvider.refresh(firstSession);

// Logout
await identityProvider.logout(secondSession);
```

### Session structure

The session has the following structure.

```ts
type Session = {
    key?: string;
    requester?: unknown;
    identity: Identity;
    accessToken: Token;
    refreshToken: Token;
    expires: Date;
};
```

Every session has a unique key that will be provided to external clients. This key is an unrelated hash value that contains no session information. It's ony used for referencing and storage.

The requester represents the actual logged in user retrieved from the identity information (email), and can be stored in the session for quick reference. The full Identity structure looks like this.

```ts
type Identity = {
    name: string;
    nickname: string | undefined;
    picture: string | undefined;
    email: string;
    email_verified: boolean;
};
```

The access and refresh tokens can be of any type, but is always represented as string. This depends on the configured implementation. In most cases this will be a JWT.

```ts
type Token = string;
```
