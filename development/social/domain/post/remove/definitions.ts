
import type { Publication, Subscription } from '@theshelf/eventbroker';

export type RemovedEventData = {
    readonly creatorId: string;
    readonly postId: string;
    readonly parentId?: string;
};

export type RemovedPublication = Publication<RemovedEventData>;
export type RemovedSubscription = Subscription<RemovedEventData>;

export type RemovedEventHandler = (eventData: RemovedEventData) => void;

export const EVENT_NAME = 'removed';
