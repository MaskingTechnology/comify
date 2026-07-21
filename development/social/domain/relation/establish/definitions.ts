
import type { Publication, Subscription } from '@theshelf/eventbroker';

export type CreateData = {
    readonly followerId: string;
    readonly followingId: string;
};

export type EstablishedEventData = {
    readonly followerId: string;
    readonly followingId: string;
};

export type EstablishedPublication = Publication<EstablishedEventData>;
export type EstablishedSubscription = Subscription<EstablishedEventData>;

export type EstablishedEventHandler = (eventData: EstablishedEventData) => void;

export const EVENT_NAME = 'established';
