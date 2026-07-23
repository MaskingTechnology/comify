
export const EVENT_NAME = 'established';

export type EventData = {
    readonly tenantId: string;
    readonly followerId: string;
    readonly followingId: string;
    readonly establishedAt: string;
};

export type EventHandler = (eventData: EventData) => void;
