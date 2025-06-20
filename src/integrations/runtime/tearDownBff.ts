
import eventBroker from '^/integrations/eventbroker';

const disconnections = [];

if (eventBroker.connected) disconnections.push(eventBroker.disconnect());

await Promise.allSettled(disconnections);
