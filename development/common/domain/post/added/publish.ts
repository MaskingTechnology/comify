
import eventBroker from '^/integrations/eventBroker';

import { EVENT_CHANNEL, type EventData } from '../definitions';
import { EVENT_NAME } from './definitions';

export default async function (data: EventData): Promise<void>
{
    return eventBroker.publish<EventData>({ channel: EVENT_CHANNEL, name: EVENT_NAME, data });
}
