
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { AddedEventHandler, AddedSubscription } from './types';

export default async function subscribeEvent(handler: AddedEventHandler): Promise<void>
{
    const subscription: AddedSubscription = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        handler: (data) => handler(data.requesterId, data.postId)
    };

    return eventBroker.subscribe(subscription);
}
