
import eventBroker from '@theshelf/eventbroker';

import { EVENT_CHANNEL } from '../definitions';
import { EVENT_NAME } from './definitions';
import type { EstablishedPublication } from './types';

export default async function publish(followerId: string, followingId: string): Promise<void>
{
    const publication: EstablishedPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { followerId, followingId }
    };

    return eventBroker.publish(publication);
}
