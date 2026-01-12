
import eventBroker from './eventBroker';

if (eventBroker.connected)
{
    await eventBroker.disconnect();
}
