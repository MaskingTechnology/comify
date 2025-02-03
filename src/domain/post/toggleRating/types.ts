
import { Publication, Subscription } from '^/integrations/eventbroker';

export type RatedEventData = {
    raterId: string;
    creatorId: string;
    postId: string;
};

export type RatedPublication = Publication<RatedEventData>;
export type RatedSubscription = Subscription<RatedEventData>;

export type RatedEventHandler = (eventData: RatedEventData) => void;
