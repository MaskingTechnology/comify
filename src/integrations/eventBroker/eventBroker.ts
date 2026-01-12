
import EventBroker, { MemoryDriver } from '@theshelf/eventbroker';

const driver = new MemoryDriver();

export default new EventBroker(driver);
