
import eventBroker from '^/integrations/events';

import { EVENT_TOPIC, type EventData } from '../definitions';
import { EVENT_NAME } from './definitions';

export default async function (data: EventData): Promise<void>
{
    return eventBroker.publish<EventData>({ topic: EVENT_TOPIC, name: EVENT_NAME, data });
}
