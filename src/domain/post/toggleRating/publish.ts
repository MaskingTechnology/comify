
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { RatedPublication } from './types';

export default async function publish(raterId: string, creatorId: string, postId: string): Promise<void>
{
    const publication: RatedPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { raterId, creatorId, postId }
    };

    return eventBroker.publish(publication);
}
