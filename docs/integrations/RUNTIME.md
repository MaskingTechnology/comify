
# Runtime | Comify docs

The runtime integration provides a universal interaction layer with Jitar and the configuration for for setting up the other integrations.

## Errors

Both the domain and web UI containers do not depend on Jitar to operate. However, there are certain aspects of Jitar that we want to utilize for better debuggability—specifically, its error handling.

Jitar automatically creates API endpoints based on the segment configuration. By default, it translates every application error into an Internal Server Error, which is transported with a 500 status code over HTTP. To help Jitar translate application errors into more meaningful status codes, we can leverage its error-handling mechanisms.

To decouple these errors from the domain, a separate set of errors has been added to this integration, which are used by the domain. Each error is an extension of a Jitar error:

* **BadRequest** - status code 400
* **Unauthorized** - status code 401
* **NotFound** - status code 404
* **ValidationError** - status code 400 (specialization of NotFound)
* **ServerError** - status code 500

If we decide to migrate from Jitar to another solution, these errors will need to be remapped.

## Health checks

Jitar provides a [health check](https://docs.jitar.dev/deploy/health-checks.html) system for monitoring the health of worker nodes. We leverage this system to check the availability of the services behind the integrations:

* Database
* File store
* Notification

For each health check, we implemented Jitar's interface. These implementations are located in the `healthchecks` folder. An instance is created and provided to Jitar from the similarly named health check file in the runtime root folder.

## Middleware

Jitar provides a [middleware](https://docs.jitar.dev/develop/middleware.html) system for intercepting RPC requests. We leverage this system for authentication. For this we've created two types of middleware:

* Authentication - server side middleware hooked to the authentication integration
* Requester - client side middleware for browser control

For each middleware, we implemented Jitar's interface. These implementations are located in the `middleswares` folder. An instance is created and provided to Jitar from the similarly named middleware file in the runtime root folder.

## Set up and tear down

Jitar provides a [set-up and tear-down](https://docs.jitar.dev/develop/setup-and-teardown.html) system for executing tasks before starting and stopping a service. We leverage this system for connection / disconnecting the services behind the integrations. We have script for the following two Jitar services:

* Gateway (authentication)
* Node (database, event broker, file store, notification)

For each service, we implemented a separate set-up and tear-down script in the runtime root folder.
