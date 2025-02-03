
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { RatedEventHandler, RatedSubscription } from './types';

export default async function subscribe(handler: RatedEventHandler): Promise<void>
{
    const subscription: RatedSubscription = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        handler
    };

    return eventBroker.subscribe(subscription);
}
