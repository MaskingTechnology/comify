
import type { RecordQuery } from '^/integrations/database';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

export const QUERIES: Record<string, RecordQuery> =
{
    EXISTING_RELATION: {
        followerId: { EQUALS: REQUESTERS.SECOND.id },
        followingId: { EQUALS: VALUES.IDS.CREATOR1 }
    },

    NON_EXISTING_RELATION: {
        followerId: { EQUALS: REQUESTERS.UNKNOWN.id },
        followingId: { EQUALS: VALUES.IDS.CREATOR2 }
    }
};
