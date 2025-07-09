
import eventBroker from '^/integrations/eventbroker';

try
{
    await Promise.allSettled([
        eventBroker.connect()
    ]);
}
catch (error)
{
    const disconnections = [];

    if (eventBroker.connected) disconnections.push(eventBroker.disconnect());

    await Promise.allSettled(disconnections);

    throw error;
}
