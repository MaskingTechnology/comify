
export const EVENT_NAME = 'added';

export type EventData = {
    readonly tenantId: string;
    readonly postId: string;
    readonly creatorId: string;
    readonly addedAt: string;
};

export type EventHandler = (eventData: EventData) => void;
