
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';
import { EVENT_NAME } from './definitions';
import type { RemovedPublication } from './types';

export default async function publish(creatorId: string, postId: string, parentId?: string): Promise<void>
{
    const publication: RemovedPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { creatorId, postId, parentId }
    };

    return eventBroker.publish(publication);
}
