
import type { Identity } from '@theshelf/authentication';

import type { Record as CreatorRecord } from '@comify/social/domain/creator';

import { CREATOR_RECORDS } from './creators.fixture';

export const IDENTITIES: Record<string, Identity> = {} as const;

for (const [key, record] of Object.entries(CREATOR_RECORDS))
{
    const identity = createIdentity(record);

    IDENTITIES[key] = identity;
}

function createIdentity(record: CreatorRecord): Identity
{
    return {
        name: record.fullName,
        nickname: record.nickname,
        email: record.email,
        picture: undefined,
        email_verified: false
    };
}

export type IDENTITIES = typeof IDENTITIES[keyof typeof IDENTITIES];
