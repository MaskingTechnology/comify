
import eventBroker from '^/integrations/eventBroker';

import { EVENT_CHANNEL } from '../definitions';
import { EVENT_NAME } from './definitions';
import type { ToggledPublication } from './types';

export default async function publish(tenantId: string, creatorId: string, postId: string, rated: boolean): Promise<void>
{
    const publication: ToggledPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { tenantId, creatorId, postId, rated }
    };

    return eventBroker.publish(publication);
}
