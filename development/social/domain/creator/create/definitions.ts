
import type { Publication, Subscription } from '@theshelf/eventbroker';

export type CreateData = {
    readonly fullName: string;
    readonly nickname: string;
    readonly email: string;
    readonly portraitUrl?: string;
};

export type RegisteredEventData = {
    creatorId: string;
};

export type RegisteredPublication = Publication<RegisteredEventData>;
export type RegisteredSubscription = Subscription<RegisteredEventData>;

export type RegisteredEventHandler = (eventData: RegisteredEventData) => void;

export const MAX_NICKNAME_NUMBER = 1000;

export const EVENT_NAME = 'registered';
