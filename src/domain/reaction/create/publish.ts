
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { CreatedPublication } from './types';

export default async function publish(creatorId: string, reactionId: string, targetCreatorId: string, targetPostId?: string, targetReactionId?: string): Promise<void>
{
    const publication: CreatedPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { creatorId, reactionId, targetCreatorId, targetPostId, targetReactionId }
    };

    return eventBroker.publish(publication);
}
