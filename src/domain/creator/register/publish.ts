
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import type { RegisteredPublication } from './types';

export default async function publish(creatorId: string): Promise<void>
{
    const publication: RegisteredPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { creatorId }
    };

    return eventBroker.publish(publication);
}
