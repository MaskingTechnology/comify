
import NotificationService, { MemoryDriver } from '@theshelf/notification';
import ConnectionManager from '@theshelf/connection';

import logger from '^/integrations/logging';

export const driver = new MemoryDriver();

const notificationService = new NotificationService(driver);

const connectionManager = new ConnectionManager({
    name: 'Notification service',
    connectable: notificationService,
    logger
});

export { notificationService as default, connectionManager };
