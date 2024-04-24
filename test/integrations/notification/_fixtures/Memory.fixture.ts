
import { NotificationService } from '^/integrations/notification/definitions/interfaces';
import SubscriptionNotFound from '^/integrations/notification/errors/SubscriptionNotFound';
import Memory from '^/integrations/notification/implementations/memory/Memory';

const FIRST_SUBSCRIPTION_ID = 'first';
const SECOND_SUBSCRIPTION_ID = 'second';
const UNKNOWN_RECIPIENT_ID = 'unknown';

const NOTIFICATION_TITLE = 'Hello, world!';
const NOTIFICATION_BODY = 'This is a test notification.';

const notificationService = new Memory();
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
    FIRST_SUBSCRIPTION_ID, NOTIFICATION_BODY, NOTIFICATION_TITLE, SECOND_SUBSCRIPTION_ID, SubscriptionNotFound, UNKNOWN_RECIPIENT_ID, setUpMemoryNotifications
};

