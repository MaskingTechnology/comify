
import { requester, Requester } from '^/domain/authentication';

import { VALUES } from './values.fixture';

export const REQUESTERS: Record<string, Requester> =
{
    UNKNOWN: requester,
    CREATOR1: { id: VALUES.IDS.CREATOR1, fullName: VALUES.FULL_NAMES.CREATOR1, nickname: VALUES.NICKNAMES.CREATOR1 },
    CREATOR2: { id: VALUES.IDS.CREATOR2, fullName: VALUES.FULL_NAMES.CREATOR2, nickname: VALUES.NICKNAMES.CREATOR2 },

    VIEWER: { id: VALUES.IDS.VIEWER, fullName: VALUES.FULL_NAMES.VIEWER, nickname: VALUES.NICKNAMES.VIEWER }
};
