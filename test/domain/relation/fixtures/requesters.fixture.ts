
import johnDoe from '^/domain/authentication/requester';

import { RECORDS } from './records.fixture';

const CREATOR1 = RECORDS.CREATORS[0];
const CREATOR2 = RECORDS.CREATORS[1];

export const REQUESTERS =
{
    FIRST: { id: CREATOR1.id as string, fullName: CREATOR1.fullName as string, nickname: CREATOR1.nickname as string },
    SECOND: { id: CREATOR2.id as string, fullName: CREATOR2.fullName as string, nickname: CREATOR2.nickname as string },
    UNKNOWN: johnDoe
};
