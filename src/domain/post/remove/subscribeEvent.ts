
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { RemovedEvent, RemovedEventHandler } from './types';

export default async function subscribeEvent(handler: RemovedEventHandler): Promise<void>
{
    const event: RemovedEvent = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME
    };

    const wrappedHandler = (event: RemovedEvent) => handler(event.data!.requesterId, event.data!.postId);

    return eventBroker.subscribe(event, wrappedHandler);
}
