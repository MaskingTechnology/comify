
import { RecordQuery } from '^/integrations/database';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

export const QUERIES: Record<string, RecordQuery> =
{
    RATING_NOT_EXISTING: {
        creatorId: { EQUALS: REQUESTERS.OWNER.id },
        postId: { EQUALS: VALUES.IDS.REACTION_NOT_EXISTING }
    }
};
