
import { Publication, Subscription } from '^/integrations/eventbroker';

import { DataModel } from '../types';

export type ValidationModel = Pick<DataModel, 'creatorId' | 'postId' | 'reactionId' | 'comicId' | 'commentId'>;

export type CreatedEventData = {
    creatorId: string;
    reactionId: string;
    targetCreatorId: string;
    targetPostId?: string;
    targetReactionId?: string;
};

export type CreatedPublication = Publication<CreatedEventData>;
export type CreatedSubscription = Subscription<CreatedEventData>;

export type CreatedEventHandler = (creatorId: string, reactionId: string, targetCreatorId: string, targetPostId?: string, targetReactionId?: string) => void;
