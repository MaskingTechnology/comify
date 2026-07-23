
import { type PostContent } from '../definitions';

export const EVENT_NAME = 'reported';

export type EventData = {
    readonly tenantId: string;
    readonly reportId: string;
    readonly reporterId: string;
    readonly reason?: string;
    readonly creatorId: string;
    readonly postId: string;
    readonly content: PostContent;
    readonly reportedAt: string;
};

export type EventHandler = (eventData: EventData) => void;
