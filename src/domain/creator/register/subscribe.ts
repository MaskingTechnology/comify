
import eventBroker from '^/integrations/eventBroker';

import { EVENT_CHANNEL } from '../definitions';
import { EVENT_NAME } from './definitions';
import type { RegisteredEventHandler, RegisteredSubscription } from './types';

export default async function subscribe(handler: RegisteredEventHandler): Promise<void>
{
    const subscription: RegisteredSubscription = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        handler
    };

    return eventBroker.subscribe(subscription);
}
