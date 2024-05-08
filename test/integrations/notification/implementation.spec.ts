
import { beforeEach, describe, expect, it } from 'vitest';

import notificationService, { SubscriptionNotFound } from '^/integrations/notification/module';

import { NOTIFICATION_SERVICES, VALUES } from './fixtures';

beforeEach(async () =>
{
    await NOTIFICATION_SERVICES.withRecipient();
});

describe('integrations/notification/implementation', () =>
{
    describe('.subscribe(path)', () =>
    {
        it('should create a new subscription', async () =>
        {
            const subscriptions = notificationService.subscriptions;

            await notificationService.subscribe(VALUES.RECIPIENTS.SECOND, undefined);

            expect(subscriptions.has(VALUES.RECIPIENTS.SECOND)).toBeTruthy();
        });

        it('should override an existing subscription', async () =>
        {
            const subscriptions = notificationService.subscriptions;

            await notificationService.subscribe(VALUES.RECIPIENTS.FIRST, undefined);

            expect(subscriptions.has(VALUES.RECIPIENTS.FIRST)).toBeTruthy();
        });
    });

    describe('.unsubscribe(path)', () =>
    {
        it('should remove an existing subscription', async () =>
        {
            const subscriptions = notificationService.subscriptions;

            await notificationService.unsubscribe(VALUES.RECIPIENTS.FIRST);

            expect(subscriptions.has(VALUES.RECIPIENTS.FIRST)).toBeFalsy();
        });

        it('should not remove a non-existing subscription', async () =>
        {
            const promise = notificationService.unsubscribe(VALUES.RECIPIENTS.UNKNOWN);
            expect(promise).rejects.toStrictEqual(new SubscriptionNotFound(VALUES.RECIPIENTS.UNKNOWN));
        });
    });

    describe('.sendNotification(path)', () =>
    {
        it('should send a notification to an existing subscription', async () =>
        {
            const notifications = notificationService.subscriptions.get(VALUES.RECIPIENTS.FIRST) as Array<unknown>;

            await notificationService.sendNotification(VALUES.RECIPIENTS.FIRST, VALUES.NOTIFICATION.TITLE, VALUES.NOTIFICATION.BODY);

            expect(notifications).toHaveLength(1);
        });

        it('should not send a notification to a non-existing subscription', async () =>
        {
            const promise = notificationService.sendNotification(VALUES.RECIPIENTS.UNKNOWN, VALUES.NOTIFICATION.TITLE, VALUES.NOTIFICATION.BODY);
            expect(promise).rejects.toStrictEqual(new SubscriptionNotFound(VALUES.RECIPIENTS.UNKNOWN));
        });
    });
});
