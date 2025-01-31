
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { RatedPublication } from './types';

export default async function publish(requesterId: string, creatorId: string, reactionId: string): Promise<void>
{
    const publication: RatedPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { requesterId, creatorId, reactionId }
    };

    return eventBroker.publish(publication);
}
