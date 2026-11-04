
import eventBroker from '^/integrations/events';

import { EVENT_TOPIC, type EventData, type EventHandler } from '../definitions';

import { EVENT_NAME } from './definitions';

export default async function (handler: EventHandler): Promise<void>
{
    return eventBroker.subscribe<EventData>({ topic: EVENT_TOPIC, name: EVENT_NAME, handler });
}
