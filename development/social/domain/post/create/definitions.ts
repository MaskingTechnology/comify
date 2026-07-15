
import type { Publication, Subscription } from '@theshelf/eventbroker';

import type { Data } from '../definitions';

export type ValidationModel = Pick<Data, 'tenantId' | 'creatorId' | 'comicId' | 'commentId' | 'parentId'>;

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
