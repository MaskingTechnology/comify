
import EventBroker from './EventBroker';
import implementation from './implementation';

const eventBroker = new EventBroker(implementation);

export * from './definitions/types';
export type { EventBroker };
export default eventBroker;
