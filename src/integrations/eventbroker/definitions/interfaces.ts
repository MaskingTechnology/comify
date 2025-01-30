
import { Event, EventHandler } from './types';

export interface Driver
{
    get connected(): boolean;

    connect(): Promise<void>;
    disconnect(): Promise<void>;

    publish<T>(event: Event<T>): Promise<void>;
    subscribe<T>(event: Event<T>, handler: EventHandler<T>): Promise<void>;
    unsubscribe<T>(event: Event<T>, handler: EventHandler<T>): Promise<void>;

    clear(): Promise<void>;
}
