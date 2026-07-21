
import type { Publication, Subscription } from '@theshelf/eventbroker';

export type CreateData = {
    tenantId: string;
    creatorId: string;
    comicId?: string;
    commentId?: string;
    parentId?: string;
};

export type CreatedEventData = {
    tenantId: string;
    creatorId: string;
    postId: string;
    parentId?: string;
};

export type CreatedPublication = Publication<CreatedEventData>;
export type CreatedSubscription = Subscription<CreatedEventData>;

export type CreatedEventHandler = (eventData: CreatedEventData) => void;

export const EVENT_NAME = 'created';
