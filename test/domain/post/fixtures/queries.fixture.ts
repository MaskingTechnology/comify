
import johnDoe from '^/domain/authentication/johnDoe';
import { RecordQuery } from '^/integrations/database/module';

import { VALUES } from './values.fixture';

export const QUERIES: Record<string, RecordQuery> =
{
    RATING_NOT_EXISTING_POST: {
        creatorId: { EQUALS: johnDoe.id },
        postId: { EQUALS: VALUES.IDS.POST_NOT_EXISTING }
    }
};
