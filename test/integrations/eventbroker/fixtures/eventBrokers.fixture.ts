
import eventBroker from '^/integrations/eventbroker';

await eventBroker.connect();

async function empty(): Promise<void>
{
    await eventBroker.clear();
}

export const EVENT_BROKERS = { empty };
