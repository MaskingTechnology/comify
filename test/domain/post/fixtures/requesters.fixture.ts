
import johnDoe from '^/domain/authentication/requester';
import { Requester } from '^/domain/authentication/types';

import { VALUES } from './values.fixture';

export const REQUESTERS: Record<string, Requester> =
{
    UNKNOWN: johnDoe,
    CREATOR1: { id: VALUES.IDS.CREATOR1, fullName: VALUES.FULL_NAMES.CREATOR1, nickname: VALUES.NICKNAMES.CREATOR1 },
    CREATOR2: { id: VALUES.IDS.CREATOR2, fullName: VALUES.FULL_NAMES.CREATOR2, nickname: VALUES.NICKNAMES.CREATOR2 },
    CREATOR3: { id: VALUES.IDS.CREATOR3, fullName: VALUES.FULL_NAMES.CREATOR3, nickname: VALUES.NICKNAMES.CREATOR3 },
    CREATOR4: { id: VALUES.IDS.CREATOR4, fullName: VALUES.FULL_NAMES.CREATOR4, nickname: VALUES.NICKNAMES.CREATOR4 },
    VIEWER: { id: VALUES.IDS.VIEWER, fullName: VALUES.FULL_NAMES.VIEWER, nickname: VALUES.NICKNAMES.VIEWER }
};
