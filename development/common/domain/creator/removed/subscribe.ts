
import eventBroker from '@comify/common/integrations/eventBroker';

import { EVENT_CHANNEL } from '../definitions';
import { EVENT_NAME } from './definitions';
import { type EventData, type EventHandler } from './definitions';

export default async function subscribe(handler: EventHandler): Promise<void>
{
    return eventBroker.subscribe<EventData>({ channel: EVENT_CHANNEL, name: EVENT_NAME, handler });
}
