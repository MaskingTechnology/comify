
import { Driver } from './definitions/interfaces';
import { Event, EventHandler } from './definitions/types';

export default class EventBroker implements Driver
{
    #driver: Driver;

    constructor(driver: Driver)
    {
        this.#driver = driver;
    }

    get connected() { return this.#driver.connected; }

    connect(): Promise<void>
    {
        return this.#driver.connect();
    }

    disconnect(): Promise<void>
    {
        return this.#driver.disconnect();
    }

    publish<T>(event: Event<T>): Promise<void>
    {
        return this.#driver.publish(event);
    }

    subscribe<T>(event: Event<T>, handler: EventHandler<T>): Promise<void>
    {
        return this.#driver.subscribe(event, handler);
    }

    unsubscribe<T>(event: Event<T>, handler: EventHandler<T>): Promise<void>
    {
        return this.#driver.unsubscribe(event, handler);
    }

    clear(): Promise<void>
    {
        return this.#driver.clear();
    }
}
