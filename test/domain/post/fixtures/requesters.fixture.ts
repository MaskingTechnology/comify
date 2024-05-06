
import Requester from '^/domain/authentication/Requester';
import johnDoe from '^/domain/authentication/johnDoe';

import { VALUES } from './values.fixture';

export const REQUESTERS: Record<string, Requester> =
{
    UNKNOWN: johnDoe,
    EXISTING: new Requester(VALUES.IDS.CREATOR, VALUES.FULL_NAMES.CREATOR, VALUES.NICKNAMES.CREATOR),
};
