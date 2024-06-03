
import johnDoe from '^/domain/authentication/requester';

import { VALUES } from './values.fixture';

export const REQUESTERS =
{
    UNKNOWN: johnDoe,
    CREATOR: { id: VALUES.IDS.CREATOR, fullName: VALUES.FULL_NAMES.CREATOR, nickname: VALUES.NICKNAMES.CREATOR }
};
