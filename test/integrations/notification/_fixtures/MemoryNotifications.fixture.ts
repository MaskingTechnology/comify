
import notificationService from '../../../../src/integrations/notification/implementations/MemoryNotifications';
import { NotificationService } from '../../../../src/integrations/notification/definitions/interfaces';
import { SubscriptionNotFound } from '../../../../src/integrations/notification/definitions/errors';

const FIRST_SUBSCRIPTION_ID = 'first';
const SECOND_SUBSCRIPTION_ID = 'second';
const UNKNOWN_RECIPIENT_ID = 'unknown';

const NOTIFICATION_TITLE = 'Hello, world!';
const NOTIFICATION_BODY = 'This is a test notification.';

await notificationService.connect();

async function setUpMemoryNotifications(): Promise<NotificationService>
{
    await notificationService.disconnect();
    await notificationService.connect();
    await notificationService.subscribe(FIRST_SUBSCRIPTION_ID);

    return notificationService;
}

export
{
    FIRST_SUBSCRIPTION_ID, SECOND_SUBSCRIPTION_ID, UNKNOWN_RECIPIENT_ID,
    NOTIFICATION_TITLE, NOTIFICATION_BODY,
    setUpMemoryNotifications, SubscriptionNotFound
};
