
import { Publication, Subscription } from '^/integrations/eventbroker';

export type RatedEventData = {
    requesterId: string;
    creatorId: string;
    reactionId: string;
};

export type RatedPublication = Publication<RatedEventData>;
export type RatedSubscription = Subscription<RatedEventData>;

export type RatedEventHandler = (requesterId: string, creatorId: string, reactionId: string) => void;
