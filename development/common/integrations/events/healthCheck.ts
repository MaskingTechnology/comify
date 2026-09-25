
import { EventBrokerHealthCheck } from '@jitar-plugins/events';

import eventBroker from './eventBroker';

export default new EventBrokerHealthCheck(eventBroker);
