
import { requester } from '^/domain/authentication';

import { VALUES } from './values.fixture';

export const REQUESTERS =
{
    UNKNOWN: requester,
    CREATOR: { id: VALUES.IDS.CREATOR, fullName: VALUES.FULL_NAMES.CREATOR, nickname: VALUES.NICKNAMES.CREATOR }
};
