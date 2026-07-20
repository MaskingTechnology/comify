
export type Requester = {
    readonly principalId: string;
    readonly tenantId: string;
};

export const requester: Requester = {
    principalId: 'principal',
    tenantId: 'tenant'
};
