
import notificationService from '^/integrations/notification';

import { VALUES } from './values.fixture';

notificationService.connect();

async function withRecipient(): Promise<void>
{
    await notificationService.subscribe(VALUES.RECIPIENTS.FIRST, undefined);
}

export const NOTIFICATION_SERVICES = { withRecipient };
