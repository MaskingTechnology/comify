
import { Publication, Subscription } from '^/integrations/eventbroker';

import { DataModel } from '../types';

export type ValidationModel = Pick<DataModel, 'creatorId' | 'comicId' | 'commentId' | 'parentId'>;

export type CreatedEventData = {
    creatorId: string;
    postId: string;
    parentId?: string;
};

export type CreatedPublication = Publication<CreatedEventData>;
export type CreatedSubscription = Subscription<CreatedEventData>;

export type CreatedEventHandler = (eventData: CreatedEventData) => void;
