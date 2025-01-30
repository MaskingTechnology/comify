
export type Event<T> = {
    channel: string;
    name: string;
    data?: T;
};

export type EventHandler<T> = (event: Event<T>) => void;
