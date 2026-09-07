
import EventBroker, { MemoryDriver } from '@theshelf/events';
import ConnectionManager from '@theshelf/connection';

import { shelfLogger } from '^/integrations/logging';

export const driver = new MemoryDriver();

const eventBroker = new EventBroker(driver, shelfLogger);

const connectionManager = new ConnectionManager({
    name: 'Event broker',
    connectable: eventBroker
}, shelfLogger);

export { eventBroker as default, connectionManager };
