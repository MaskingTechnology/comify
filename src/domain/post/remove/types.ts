
import { Publication, Subscription } from '^/integrations/eventbroker';

export type RemovedEventData = {
    requesterId: string;
    postId: string;
};

export type RemovedPublication = Publication<RemovedEventData>;
export type RemovedSubscription = Subscription<RemovedEventData>;

export type RemovedEventHandler = (requesterId: string, postId: string) => void;
