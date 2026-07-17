
import type { Publication, Subscription } from '@theshelf/eventbroker';

import type { Record } from '../definitions';

export type ValidationModel = Pick<Record, 'tenantId' | 'creatorId' | 'comicId' | 'commentId' | 'parentId'>;

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
