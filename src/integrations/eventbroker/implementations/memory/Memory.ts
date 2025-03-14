
import { EventEmitter } from 'events';

import type { Driver } from '../../definitions/interfaces';
import type { Event, Publication, Subscription } from '../../definitions/types';

export default class Memory implements Driver
{
    readonly #emitters = new Map<string, EventEmitter>();

    #connected = true;

    get connected() { return this.#connected; }

    async connect(): Promise<void>
    {
        this.#connected = true;
    }

    async disconnect(): Promise<void>
    {
        this.#connected = false;
    }

    async publish<T>(publication: Publication<T>): Promise<void>
    {
        const emitter = this.#getEmitter(publication);

        emitter.emit(publication.name, publication.data);
    }

    async subscribe<T>(subscription: Subscription<T>): Promise<void>
    {
        const emitter = this.#getEmitter(subscription);

        emitter.on(subscription.name, subscription.handler);
    }

    async unsubscribe<T>(subscription: Subscription<T>): Promise<void>
    {
        const emitter = this.#getEmitter(subscription);

        emitter.off(subscription.name, subscription.handler);
    }

    async clear(): Promise<void>
    {
        this.#emitters.clear();
    }

    #getEmitter(event: Event): EventEmitter
    {
        if (this.#emitters.has(event.channel) === false)
        {
            this.#emitters.set(event.channel, new EventEmitter());
        }

        return this.#emitters.get(event.channel)!;
    }
}
