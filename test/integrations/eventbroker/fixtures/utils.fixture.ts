
import eventBroker, { Event } from '^/integrations/eventbroker';

export function createSubscription<T>(listenEvent: Event<T>): Promise<Event<T>>
{
    return new Promise<Event<T>>((resolve) =>
    {
        eventBroker.subscribe(listenEvent, (publishedEvent) =>
        {
            resolve(publishedEvent);
        });
    });
}
