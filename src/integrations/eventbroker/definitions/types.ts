
export type Event = {
    channel: string;
    name: string;
};

export type EventHandler<T> = (data: T) => void;

export type Publication<T> = Event & {
    data?: T;
};

export type Subscription<T> = Event & {
    handler: EventHandler<T>;
};
