
import { RecordQuery } from '^/integrations/database/module';

import { REQUESTERS } from './requesters.fixture';

export const QUERIES: Record<string, RecordQuery> =
{
    EXISTING_NICKNAME: {
        id: { EQUALS: REQUESTERS.CREATOR.id }
    },

    EXISTING_FULLNAME: {
        id: { EQUALS: REQUESTERS.CREATOR.id }
    }
};
