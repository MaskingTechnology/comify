
export const EVENT_NAME = 'unestablished';

export type EventData = {
    readonly tenantId: string;
    readonly followerId: string;
    readonly followingId: string;
    readonly unestablishedAt: string;
};

export type EventHandler = (eventData: EventData) => void;
