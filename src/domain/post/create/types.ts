
import type { Publication, Subscription } from '@theshelf/eventbroker';

import type { DataModel } from '../types';

export type ValidationModel = Pick<DataModel, 'tenantId' | 'creatorId' | 'comicId' | 'commentId' | 'parentId'>;

export type CreatedEventData = {
    tenantId: string;
    creatorId: string;
    postId: string;
    parentId?: string;
};

export type CreatedPublication = Publication<CreatedEventData>;
export type CreatedSubscription = Subscription<CreatedEventData>;

export type CreatedEventHandler = (eventData: CreatedEventData) => void;
