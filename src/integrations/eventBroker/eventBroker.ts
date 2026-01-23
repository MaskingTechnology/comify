
import EventBroker, { MemoryDriver } from '@theshelf/eventbroker';
import ConnectionManager from '@theshelf/connection';

import logger from '^/integrations/logging';

export const driver = new MemoryDriver();

const eventBroker = new EventBroker(driver);

const connectionManager = new ConnectionManager({
    name: 'Event broker',
    connectable: eventBroker,
    logger
});

export { eventBroker as default, connectionManager };
