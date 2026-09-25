
import ConnectionManager from '@theshelf/connection';
import NotificationService, { MemoryDriver } from '@theshelf/notification';

import { shelfLogger } from '^/integrations/logging';

export const driver = new MemoryDriver();

const notificationService = new NotificationService(driver, shelfLogger);

const connectionManager = new ConnectionManager({
    name: 'Notification service',
    connectable: notificationService
}, shelfLogger);

export { notificationService as default, connectionManager };
