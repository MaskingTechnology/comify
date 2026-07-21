
import type { Publication, Subscription } from '@theshelf/eventbroker';

export type CreateData = {
    readonly tenantId: string;
    readonly creatorId: string;
    readonly comicId?: string;
    readonly commentId?: string;
    readonly parentId?: string;
};

export type CreatedEventData = {
    readonly tenantId: string;
    readonly creatorId: string;
    readonly postId: string;
    readonly parentId?: string;
};

export type CreatedPublication = Publication<CreatedEventData>;
export type CreatedSubscription = Subscription<CreatedEventData>;

export type CreatedEventHandler = (eventData: CreatedEventData) => void;

export const EVENT_NAME = 'created';
