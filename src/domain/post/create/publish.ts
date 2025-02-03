
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { CreatedPublication } from './types';

export default async function publish(creatorId: string, postId: string, parentId?: string, parentCreatorId?: string): Promise<void>
{
    const publication: CreatedPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { creatorId, postId, parentId, parentCreatorId }
    };

    return eventBroker.publish(publication);
}
