
import { describe, expect, it } from 'vitest';

import
{
    FIRST_SUBSCRIPTION_ID, SECOND_SUBSCRIPTION_ID, UNKNOWN_RECIPIENT_ID,
    NOTIFICATION_TITLE, NOTIFICATION_BODY,
    createMemoryNotifications, SubscriptionNotFound
} from './_fixtures/MemoryNotifications.fixture.js';

describe('MemoryNotifications', () =>
{
    describe('.subscribe(path)', () =>
    {
        it('should create a new subscription', async () =>
        {
            const notificationService = await createMemoryNotifications();
            const subscriptions = notificationService.subscriptions;

            await notificationService.subscribe(SECOND_SUBSCRIPTION_ID);

            expect(subscriptions.has(SECOND_SUBSCRIPTION_ID)).toBe(true);
        });

        it('should override an existing subscription', async () =>
        {
            const notificationService = await createMemoryNotifications();
            const subscriptions = notificationService.subscriptions;

            await notificationService.subscribe(FIRST_SUBSCRIPTION_ID);

            expect(subscriptions.has(FIRST_SUBSCRIPTION_ID)).toBe(true);
        });
    });

    describe('.unsubscribe(path)', () =>
    {
        it('should remove an existing subscription', async () =>
        {
            const notificationService = await createMemoryNotifications();
            const subscriptions = notificationService.subscriptions;

            await notificationService.unsubscribe(FIRST_SUBSCRIPTION_ID);

            expect(subscriptions.has(FIRST_SUBSCRIPTION_ID)).toBe(false);
        });

        it('should not remove a non-existing subscription', async () =>
        {
            const notificationService = await createMemoryNotifications();

            const result = notificationService.unsubscribe(UNKNOWN_RECIPIENT_ID);

            expect(result).rejects.toStrictEqual(new SubscriptionNotFound(UNKNOWN_RECIPIENT_ID));
        });
    });

    describe('.sendNotification(path)', () =>
    {
        it('should send a notification to an existing subscription', async () =>
        {
            const notificationService = await createMemoryNotifications();
            const notifications = notificationService.subscriptions.get(FIRST_SUBSCRIPTION_ID);

            await notificationService.sendNotification(FIRST_SUBSCRIPTION_ID, NOTIFICATION_TITLE, NOTIFICATION_BODY);

            expect(notifications?.length).toBe(1);
        });

        it('should not send a notification to a non-existing subscription', async () =>
        {
            const notificationService = await createMemoryNotifications();

            const result = notificationService.sendNotification(UNKNOWN_RECIPIENT_ID, NOTIFICATION_TITLE, NOTIFICATION_BODY);

            expect(result).rejects.toStrictEqual(new SubscriptionNotFound(UNKNOWN_RECIPIENT_ID));
        });
    });
});
