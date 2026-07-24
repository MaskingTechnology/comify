
export type BaseEventData = {
    readonly contextId: string;
    readonly tenantId: string;
    readonly principalId: string;
};

export type BaseRecord = {
    readonly id: string;
};
