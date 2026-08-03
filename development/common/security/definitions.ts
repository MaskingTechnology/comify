
import type { TenantId } from '^/domain/tenant';
import type { Identifier } from '^/primitives/identifier';

export type Requester = {
    readonly principalId: Identifier;
    readonly tenantId: TenantId;
};

export const requester: Requester = {
    principalId: 'principal',
    tenantId: 'tenant'
};
