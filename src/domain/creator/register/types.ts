
import type { Publication, Subscription } from '^/integrations/eventbroker';

export type RegisteredEventData = {
    creatorId: string;
};

export type RegisteredPublication = Publication<RegisteredEventData>;
export type RegisteredSubscription = Subscription<RegisteredEventData>;

export type RegisteredEventHandler = (eventData: RegisteredEventData) => void;
