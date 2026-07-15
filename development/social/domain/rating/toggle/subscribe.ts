
import eventBroker from '@comify/common/integrations/eventBroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME, type ToggledEventHandler, type ToggledSubscription } from './definitions';

export default async function subscribe(handler: ToggledEventHandler): Promise<void>
{
    const subscription: ToggledSubscription = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        handler
    };

    return eventBroker.subscribe(subscription);
}
