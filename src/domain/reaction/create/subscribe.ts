
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { CreatedEventHandler, CreatedSubscription } from './types';

export default async function subscribe(handler: CreatedEventHandler): Promise<void>
{
    const subscription: CreatedSubscription = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        handler: (data) => handler(data.creatorId, data.reactionId, data.targetCreatorId, data.targetPostId, data.targetReactionId)
    };

    return eventBroker.subscribe(subscription);
}
