
import eventBroker from './eventBroker';

import { EventBrokerHealthCheck } from '@jitar-plugins/eventbroker';

export default new EventBrokerHealthCheck(eventBroker);
