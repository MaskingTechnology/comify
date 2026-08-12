
import type { RecordQuery } from '@theshelf/database';

import { type Record as RelationRecord } from '@comify/social/domain/relation';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

export const QUERIES: Record<string, RecordQuery<RelationRecord>> =
{
    EXISTING_RELATION: {
        followerId: { EQUALS: REQUESTERS.SECOND.principalId },
        followingId: { EQUALS: VALUES.IDS.CREATOR1 }
    },

    NON_EXISTING_RELATION: {
        followerId: { EQUALS: REQUESTERS.UNKNOWN.principalId },
        followingId: { EQUALS: VALUES.IDS.CREATOR2 }
    }
};
