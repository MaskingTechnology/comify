
import { type PostContent } from '../definitions';

export const EVENT_NAME = 'added';

export type EventData = {
    readonly tenantId: string;
    readonly creatorId: string;
    readonly postId: string;
    readonly parentId?: string;
    readonly content: PostContent;
    readonly addedAt: string;
};

export type EventHandler = (eventData: EventData) => void;
