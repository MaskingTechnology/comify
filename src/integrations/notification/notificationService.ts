
import NotificationService, { MemoryDriver } from '@theshelf/notification';

const driver = new MemoryDriver();

export default new NotificationService(driver);
