
import type { Requester } from '@comify/common/security';

import type { Record as CreatorRecord } from '@comify/social/domain/creator';

import { CREATOR_RECORDS } from './creators.fixture';

export const REQUESTERS: Record<string, Requester> = {} as const;

for (const [key, record] of Object.entries(CREATOR_RECORDS))
{
    const requester = createRequester(record);

    REQUESTERS[key] = requester;
}

function createRequester(record: CreatorRecord): Requester
{
    return {
        principalId: record.id,
        tenantId: record.tenantId
    };
}

export type REQUESTERS = typeof REQUESTERS[keyof typeof REQUESTERS];
