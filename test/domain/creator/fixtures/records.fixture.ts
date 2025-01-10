
import { RecordData } from '^/integrations/database/module';

import { VALUES } from './values.fixture';

const DEFAULT_DATA = { portraitId: undefined, postCount: 0, followerCount: 0, followingCount: 0 };


export const RECORDS: Record<string, RecordData[]> =
{
    CREATORS: [
        { id: VALUES.IDS.CREATOR, fullName: VALUES.FULL_NAMES.CREATOR, nickname: VALUES.NICKNAMES.CREATOR, ...DEFAULT_DATA }
    ]
};
