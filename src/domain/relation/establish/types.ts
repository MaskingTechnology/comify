
import { Publication, Subscription } from '^/integrations/eventbroker';

export type EstablishedEventData = {
    followerId: string;
    followingId: string;
};

export type EstablishedPublication = Publication<EstablishedEventData>;
export type EstablishedSubscription = Subscription<EstablishedEventData>;

export type EstablishedEventHandler = (eventData: EstablishedEventData) => void;
