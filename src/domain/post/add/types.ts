
import { Publication, Subscription } from '^/integrations/eventbroker';

export type AddedEventData = {
    requesterId: string;
    postId: string;
};

export type AddedPublication = Publication<AddedEventData>;
export type AddedSubscription = Subscription<AddedEventData>;

export type AddedEventHandler = (requesterId: string, postId: string) => void;
