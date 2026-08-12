
import { requester, type Requester } from '@comify/common/security';

import { TENANTS } from './tenants.fixture';
import { RECORDS } from './records.fixture';

const CREATOR1 = RECORDS.CREATORS[0];
const CREATOR2 = RECORDS.CREATORS[1];

export const REQUESTERS: Record<string, Requester> =
{
    UNKNOWN: requester,
    FIRST: { tenantId: TENANTS.default.id, principalId: CREATOR1.id as string },
    SECOND: { tenantId: TENANTS.default.id, principalId: CREATOR2.id as string }
};
