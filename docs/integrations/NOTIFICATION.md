
# Notification | Comify docs

The notification integration provides a universal interaction layer with an actual notification solution.

This integration is based on a push notification model.

## Implementations

Currently, there are two implementations:

* **Memory** - non-persistent in memory notifications (used for testing).
* **WebPush** - web browser based push notifications (used in production).

## Configuration

The used implementation needs to be configured in the `.env` file with the debug enabled setting.

```env
NOTIFICATION_IMPLEMENTATION="webpush" # (memory | webpush)
```

In case of WebPush, additional configuration is required.

```env
WEBPUSH_VAPID_SUBJECT="..."
WEBPUSH_VAPID_PUBLIC_KEY="..."
WEBPUSH_VAPID_PRIVATE_KEY="..."
```

## How to use

An instance of the configured notification service implementation can be imported for performing notification operations.

```ts
import notificationService from '^/integrations/notification';

// Perform operations with the notificationService instance
```

### Operations

```ts
import notificationService from '^/integrations/notification';

// Open connection
await notificationService.connect();

// Close connection
await notificationService.disconnect();

// Subscribe to receive notifications
await notificationService.subscribe(recipientId);

// Unsubscribe from receiving notifications
// Throws SubscriptionNotFound if subscription not found.
await notificationService.unsubscribe(recipientId);

// Send a notification to a recipient
// Throws SubscriptionNotFound if subscription not found.
await notificationService.sendNotification(recipientId, title, body);
```
