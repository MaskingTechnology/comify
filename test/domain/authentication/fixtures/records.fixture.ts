
import { RecordData } from '^/integrations/database/module';

import { VALUES } from './values.fixture';

const DEFAULT_DATA = { portraitId: undefined, joinedAt: new Date(), popularity: 0, postCount: 0, followerCount: 0, followingCount: 0 };

export const RECORDS: Record<string, RecordData[]> =
{
    CREATORS: [
        { fullName: VALUES.FULL_NAMES.FIRST, nickname: VALUES.NICKNAMES.FIRST, email: VALUES.EMAILS.FIRST, ...DEFAULT_DATA },
        { fullName: VALUES.FULL_NAMES.SECOND, nickname: VALUES.NICKNAMES.SECOND, email: VALUES.EMAILS.SECOND, ...DEFAULT_DATA },
        { fullName: VALUES.FULL_NAMES.THIRD, nickname: VALUES.NICKNAMES.THIRD, email: VALUES.EMAILS.THIRD, ...DEFAULT_DATA },
        { fullName: VALUES.FULL_NAMES.FOURTH, nickname: VALUES.NICKNAMES.FOURTH, email: VALUES.EMAILS.FOURTH, ...DEFAULT_DATA },
        { fullName: VALUES.FULL_NAMES.FIFTH, nickname: VALUES.NICKNAMES.FIFTH, email: VALUES.EMAILS.FIFTH, ...DEFAULT_DATA },
        { fullName: VALUES.FULL_NAMES.SIXTH, nickname: VALUES.NICKNAMES.SIXTH, email: VALUES.EMAILS.SIXTH, ...DEFAULT_DATA }
    ]
};
