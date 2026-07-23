
export const EVENT_NAME = 'added';

export type EventData = {
    readonly tenantId: string;
    readonly creatorId: string;
    readonly nickname: string;
    readonly fullName: string;
    readonly email: string;
    readonly addedAt: string;
};

export type EventHandler = (eventData: EventData) => void;
