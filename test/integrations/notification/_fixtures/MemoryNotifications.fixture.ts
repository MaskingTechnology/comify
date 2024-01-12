
import MemoryNotifications from '../../../../src/integrations/notification/implementations/MemoryNotifications';
import { SubscriptionNotFound } from '../../../../src/integrations/notification/definitions/errors';

const FIRST_SUBSCRIPTION_ID = 'first';
const SECOND_SUBSCRIPTION_ID = 'second';
const UNKNOWN_RECIPIENT_ID = 'unknown';

const NOTIFICATION_TITLE = 'Hello, world!';
const NOTIFICATION_BODY = 'This is a test notification.';

async function createMemoryNotifications(): Promise<MemoryNotifications>
{
    const service = new MemoryNotifications();

    await service.connect();
    await service.subscribe(FIRST_SUBSCRIPTION_ID);

    return service;
}

export
{
    FIRST_SUBSCRIPTION_ID, SECOND_SUBSCRIPTION_ID, UNKNOWN_RECIPIENT_ID,
    NOTIFICATION_TITLE, NOTIFICATION_BODY,
    createMemoryNotifications, SubscriptionNotFound
};
