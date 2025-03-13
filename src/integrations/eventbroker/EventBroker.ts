
import type { Driver } from './definitions/interfaces';
import type { Publication, Subscription } from './definitions/types';

export default class EventBroker implements Driver
{
    readonly #driver: Driver;

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

    publish<T>(publication: Publication<T>): Promise<void>
    {
        return this.#driver.publish(publication);
    }

    subscribe<T>(subscription: Subscription<T>): Promise<void>
    {
        return this.#driver.subscribe(subscription);
    }

    unsubscribe<T>(subscription: Subscription<T>): Promise<void>
    {
        return this.#driver.unsubscribe(subscription);
    }

    clear(): Promise<void>
    {
        return this.#driver.clear();
    }
}
