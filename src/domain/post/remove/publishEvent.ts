
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { RemovedEvent } from './types';

export default async function publishEvent(requesterId: string, postId: string): Promise<void>
{
    const event: RemovedEvent = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: {
            requesterId,
            postId
        }
    };

    return eventBroker.publish(event);
}
