
export const EVENT_NAME = 'removed';

export type EventData = {
    readonly tenantId: string;
    readonly postId: string;
    readonly creatorId: string;
    readonly removedAt: string;
};

export type EventHandler = (eventData: EventData) => void;
