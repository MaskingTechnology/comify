
import eventBroker from './eventBroker';

import { EventBrokerHealthCheck } from '@jitar-plugins/events';

export default new EventBrokerHealthCheck(eventBroker);
