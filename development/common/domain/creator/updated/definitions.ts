
export const EVENT_NAME = 'updated';

export type EventData = {
    readonly tenantId: string;
    readonly creatorId: string;
    readonly nickname: string;
    readonly fullName: string;
    readonly updatedAt: string;
};

export type EventHandler = (eventData: EventData) => void;
