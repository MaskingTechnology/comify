
import EventBroker, { MemoryDriver } from '@theshelf/eventbroker';

export const driver = new MemoryDriver();

export default new EventBroker(driver);
