
import { RecordQuery } from '^/integrations/database';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

export const QUERIES: Record<string, RecordQuery> =
{
    RATING_NOT_EXISTING_POST: {
        creatorId: { EQUALS: REQUESTERS.UNKNOWN.id },
        postId: { EQUALS: VALUES.IDS.POST_NOT_EXISTING }
    }
};
