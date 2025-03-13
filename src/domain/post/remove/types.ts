
import type { Publication, Subscription } from '^/integrations/eventbroker';

export type RemovedEventData = {
    creatorId: string;
    postId: string;
    parentId?: string;
};

export type RemovedPublication = Publication<RemovedEventData>;
export type RemovedSubscription = Subscription<RemovedEventData>;

export type RemovedEventHandler = (eventData: RemovedEventData) => void;
