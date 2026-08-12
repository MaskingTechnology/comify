
import type { Requester } from '@comify/common/security';

import { TENANTS } from './tenants.fixture';
import { VALUES } from './values.fixture';

export const REQUESTERS: Record<string, Requester> =
{
    CREATOR1: { tenantId: TENANTS.default.id, principalId: VALUES.IDS.CREATOR1 },
    CREATOR2: { tenantId: TENANTS.default.id, principalId: VALUES.IDS.CREATOR2 },
    CREATOR3: { tenantId: TENANTS.default.id, principalId: VALUES.IDS.CREATOR3 },
};
