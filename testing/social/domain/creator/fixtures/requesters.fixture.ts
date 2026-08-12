
import { requester, type Requester } from '@comify/common/security';

import { TENANTS } from './tenants.fixture';
import { VALUES } from './values.fixture';

export const REQUESTERS: Record<string, Requester> =
{
    UNKNOWN: requester,
    CREATOR: { tenantId: TENANTS.default.id, principalId: VALUES.IDS.CREATOR }
};
