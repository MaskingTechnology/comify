
# Logging | Comify docs

The logging integration provides a universal interaction layer with an actual logging solution.

## Implementations

Currently, there are two implementations:

* **Void** - dummy implementation that doesn't log anything (used for testing).
* **Console** - implementation based on the Node.js console (used in production).

## Configuration

The used implementation needs to be configured in the `.env` file with the debug enabled setting.

```env
LOGGING_IMPLEMENTATION="console" # (void | console)
LOGGING_DEBUG_ENABLED=true
```

## How to use

An instance of the configured logger implementation can be imported for performing logging operations.

```ts
import logger from '^/integrations/logging';

// Perform operations with the logger instance
```

### Operations

```ts
import logger from '^/integrations/logging';

// Log info
await logger.logInfo(message);

// Log warning
await logger.logWarn(message);

// Log error
await logger.logError(message);

// Log debug information
await logger.logDebug(message);

// Log multiple messages (works for all levels)
await logger.logInfo(message1, message2, ...);

// Logging multiple types of values (works for all levels)
await logger.logInfo('string', new Error('Oops...'), 42, [ 'a', 3.14 ], { name: 'John Doe', age: null });
```

### Value interpretation

Currently, the logger has support for the following types of values:

* All primitive types
* Null / undefined
* Errors (its stack if available or else its message)
* Arrays (all values will be interpreted and concatenated with a space between them)
* Objects (will be stringyfied)

In case multiple messages are given, they will be concatenated with a space between them.
