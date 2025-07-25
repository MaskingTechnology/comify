
import identityProvider from '^/integrations/authentication';
import eventBroker from '^/integrations/eventbroker';

try
{
    await Promise.allSettled([
        eventBroker.connect(),
        identityProvider.connect()
    ]);
}
catch (error)
{
    const disconnections = [];

    if (eventBroker.connected) disconnections.push(eventBroker.disconnect());
    if (identityProvider.connected) disconnections.push(identityProvider.disconnect());

    await Promise.allSettled(disconnections);

    throw error;
}
