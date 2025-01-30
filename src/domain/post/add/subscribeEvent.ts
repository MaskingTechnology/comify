
import eventBroker from '^/integrations/eventbroker';

import { EVENT_CHANNEL } from '../definitions';

import { EVENT_NAME } from './definitions';
import { AddedEvent, AddedEventHandler } from './types';

export default async function subscribeEvent(handler: AddedEventHandler): Promise<void>
{
    const event: AddedEvent = {
        channel: EVENT_CHANNEL,
        name: EVENT_NAME
    };

    const wrappedHandler = (event: AddedEvent) => handler(event.data!.requesterId, event.data!.postId);

    return eventBroker.subscribe(event, wrappedHandler);
}
