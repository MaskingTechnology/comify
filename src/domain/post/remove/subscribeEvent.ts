
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { RemovedEventHandler, RemovedSubscription } from './types';

export default async function subscribeEvent(handler: RemovedEventHandler): Promise<void>
{
    const subscription: RemovedSubscription = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        handler: (data) => handler(data.requesterId, data.postId)
    };

    return eventBroker.subscribe(subscription);
}
