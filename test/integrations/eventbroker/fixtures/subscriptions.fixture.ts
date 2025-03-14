
import type { Event } from '^/integrations/eventbroker';
import eventBroker from '^/integrations/eventbroker';

export function createSubscription<T>(event: Event): Promise<T>
{
    return new Promise<T>((resolve) =>
    {
        const subscription = { ...event, handler: (data: T) => resolve(data) };

        eventBroker.subscribe(subscription);
    });
}
