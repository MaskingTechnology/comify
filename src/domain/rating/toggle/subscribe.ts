
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import type { ToggledEventHandler, ToggledSubscription } from './types';

export default async function subscribe(handler: ToggledEventHandler): Promise<void>
{
    const subscription: ToggledSubscription = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        handler
    };

    return eventBroker.subscribe(subscription);
}
