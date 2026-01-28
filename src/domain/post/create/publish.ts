
import eventBroker from '^/integrations/eventBroker';

import { EVENT_CHANNEL } from '../definitions';
import { EVENT_NAME } from './definitions';
import type { CreatedPublication } from './types';

export default async function publish(tenantId: string, creatorId: string, postId: string, parentId?: string): Promise<void>
{
    const publication: CreatedPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { tenantId, creatorId, postId, parentId }
    };

    return eventBroker.publish(publication);
}
