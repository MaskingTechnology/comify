
import EventBroker, { MemoryDriver } from '@theshelf/eventbroker';
import ConnectionManager from '@theshelf/connection';

import { shelfLogger } from '^/integrations/logging';

export const driver = new MemoryDriver();

const eventBroker = new EventBroker(driver, shelfLogger);

const connectionManager = new ConnectionManager({
    name: 'Event broker',
    connectable: eventBroker
}, shelfLogger);

export { eventBroker as default, connectionManager };
