
# Event Broker | Comify docs

## Introduction

The event broker integration provides a universal interaction layer with an actual event broker solution.

## Implementations

Currently, there is only one implementation:

* **Memory** - non-persistent event broker based on the Node.js `EventEmitter` (used in tests and production).

We have plans to add a Kafka implementation later on.

## Configuration

The used implementation needs to be configured in the `.env` file.

```env
EVENT_BROKER_IMPLEMENTATION="memory"
```

## How to use

An instance of the configured event broker implementation can be imported for performing event operations.

```ts
import eventBroker from '^/integrations/eventbroker';

// Perform operations with the eventBroker instance
```

### Operations

```ts
import eventBroker, { Publication, Subscription } from '^/integrations/eventbroker';

// Open connection
await eventBroker.connect();

// Close connection
await eventBroker.disconnect();

// Subscribe to an event
const subscription: Subscription = { channel: 'post', name: 'updated', handler: (postId: string) => { ... } };
await eventBroker.subscribe(subscription);

// Publish an event
const publication: Publication = { channel: 'post', name: 'updated', data: { postId: '123' } };
await eventBroker.publish(publication);

// Unsubscribe from an event
await eventBroker.unsubscribe(subscription);
```
