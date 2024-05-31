
import johnDoe from '^/domain/authentication/requester';
import { Requester } from '^/domain/authentication/types';

import { VALUES } from './values.fixture';

export const REQUESTERS: Record<string, Requester> =
{
    UNKNOWN: johnDoe,
    CREATOR: { id: VALUES.IDS.CREATOR, fullName: VALUES.FULL_NAMES.CREATOR, nickname: VALUES.NICKNAMES.CREATOR },
    VIEWER: { id: VALUES.IDS.VIEWER, fullName: VALUES.FULL_NAMES.VIEWER, nickname: VALUES.NICKNAMES.VIEWER }
};
