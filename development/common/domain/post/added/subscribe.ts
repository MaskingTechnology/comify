
import eventBroker from '@comify/common/integrations/eventBroker';

import { EVENT_CHANNEL, type EventData, type EventHandler } from '../definitions';
import { EVENT_NAME } from './definitions';

export default async function (handler: EventHandler): Promise<void>
{
    return eventBroker.subscribe<EventData>({ channel: EVENT_CHANNEL, name: EVENT_NAME, handler });
}
