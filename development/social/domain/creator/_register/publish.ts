
import eventBroker from '@comify/common/integrations/eventBroker';

import { EVENT_CHANNEL } from '../definitions';
import { EVENT_NAME } from './definitions';
import type { RegisteredPublication } from './definitions';

export default async function publish(creatorId: string): Promise<void>
{
    const publication: RegisteredPublication = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        data: { creatorId }
    };

    return eventBroker.publish(publication);
}

// TODO: Is this publish part of the _register, or should we move this into the 'Common' folder / context ?
