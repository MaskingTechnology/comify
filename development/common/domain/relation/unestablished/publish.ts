
import eventBroker from '@comify/common/integrations/eventBroker';

import { EVENT_CHANNEL } from '../definitions';
import { EVENT_NAME, type EventData } from './definitions';

export default async function publish(data: EventData): Promise<void>
{
    return eventBroker.publish<EventData>({ channel: EVENT_CHANNEL, name: EVENT_NAME, data });
}
