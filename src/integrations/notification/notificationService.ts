
import NotificationService, { MemoryDriver } from '@theshelf/notification';

export const driver = new MemoryDriver();

export default new NotificationService(driver);
