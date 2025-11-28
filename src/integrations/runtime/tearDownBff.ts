
import identityProvider from '@theshelf/authentication';
import eventBroker from '@theshelf/eventbroker';

const disconnections = [];

if (eventBroker.connected) disconnections.push(eventBroker.disconnect());
if (identityProvider.connected) disconnections.push(identityProvider.disconnect());

await Promise.allSettled(disconnections);
