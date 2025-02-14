
# Integrations | Comify docs

The integrations contain interfaces and implementations for decoupling technical concerns and external dependencies from the domain and Web UI containers.

## Concerns

Currently, we have dependency integrations for the following concerns:

* [**Authentication**](./AUTHENTICATION.md) - handles access and identity management.
* [**Database**](./DATABASE.md) - handles storing and retrieving data.
* [**Event broker**](./EVENT_BROKER.md) - handles event management.
* [**File store**](./FILE_STORE.md) - handles storing and retrieving files (comic images).
* [**HTTP**](./HTTP.md) - handles outgoing HTTP requests.
* [**Logging**](./LOGGING.md) - handles application logging.
* [**Notification**](./NOTIFICATION.md) - handles sending notifications to devices.
* [**Runtime**](./RUNTIME.md) - handles the runtime configuration for setting up the infrastructure.
* [**Validation**](./VALIDATION.md) - handles incoming data validation.

Besides these, we have some smaller integrations for the following utilities:

* [**Crypto**](../../src/integrations/utilities/crypto.ts) - handles generating hashes and IDs.
* [**Dates**](../../src/integrations/utilities/dates.ts) - handles complex date querying like calculating time elapsed.
* [**Sanitize**](../../src/integrations/utilities/sanitize.ts) - handles sanitizing incoming data.
* [**Web browser**](../../src/integrations/utilities/webbrowser.ts) - handles common web browser-related functions.
