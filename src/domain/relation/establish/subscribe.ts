
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { EstablishedEventHandler, EstablishedSubscription } from './types';

export default async function subscribe(handler: EstablishedEventHandler): Promise<void>
{
    const subscription: EstablishedSubscription = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        handler: (data) => handler(data.followerId, data.followingId)
    };

    return eventBroker.subscribe(subscription);
}
