
import eventBroker from '@theshelf/eventbroker';

import { EVENT_CHANNEL } from '../definitions';
import { EVENT_NAME } from './definitions';
import type { RemovedEventHandler, RemovedSubscription } from './types';

export default async function subscribe(handler: RemovedEventHandler): Promise<void>
{
    const subscription: RemovedSubscription = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME,
        handler
    };

    return eventBroker.subscribe(subscription);
}
