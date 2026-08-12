
import { requester, type Requester } from '@comify/common/security';

import { TENANTS } from './tenants.fixture';
import { VALUES } from './values.fixture';

export const REQUESTERS: Record<string, Requester> =
{
    UNKNOWN: requester,
    CREATOR1: { tenantId: TENANTS.default.id, principalId: VALUES.IDS.CREATOR1 },
    CREATOR2: { tenantId: TENANTS.default.id, principalId: VALUES.IDS.CREATOR2 },
    VIEWER: { tenantId: TENANTS.default.id, principalId: VALUES.IDS.VIEWER }
};
