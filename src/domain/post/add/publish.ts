
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { AddedPublication } from './types';

export default async function publish(requesterId: string, postId: string): Promise<void>
{
    const publication: AddedPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { requesterId, postId }
    };

    return eventBroker.publish(publication);
}
