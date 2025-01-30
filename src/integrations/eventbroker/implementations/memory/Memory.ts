
import { EventEmitter } from 'events';

import { Driver } from '../../definitions/interfaces';
import { Event, EventHandler } from '../../definitions/types';

export default class Memory implements Driver
{
    #connected = false;
    #emitters = new Map<string, EventEmitter>();

    get connected() { return this.#connected; }

    async connect(): Promise<void>
    {
        this.#connected = true;
    }

    async disconnect(): Promise<void>
    {
        this.#connected = false;
    }

    async publish<T>(event: Event<T>): Promise<void>
    {
        const emitter = this.#getEmitter(event);

        emitter.emit(event.name, event.data);
    }

    async subscribe<T>(event: Event<T>, handler: EventHandler<T>): Promise<void>
    {
        const emitter = this.#getEmitter(event);

        emitter.on(event.name, handler);
    }

    async unsubscribe<T>(event: Event<T>, handler: EventHandler<T>): Promise<void>
    {
        const emitter = this.#getEmitter(event);

        emitter.off(event.name, handler);
    }

    async clear(): Promise<void>
    {
        this.#emitters.clear();
    }

    #getEmitter<T>(event: Event<T>): EventEmitter
    {
        if (this.#emitters.has(event.channel) === false)
        {
            this.#emitters.set(event.channel, new EventEmitter());
        }

        return this.#emitters.get(event.channel)!;
    }
}
