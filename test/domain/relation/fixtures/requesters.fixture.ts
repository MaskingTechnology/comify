
import johnDoe from '^/domain/authentication/johnDoe';
import Requester from '^/domain/authentication/Requester';

import { RECORDS } from './records.fixture';

const CREATOR1 = RECORDS.CREATORS[0];
const CREATOR2 = RECORDS.CREATORS[1];

export const REQUESTERS =
{
    FIRST: new Requester(CREATOR1.id as string, CREATOR1.fullName as string, CREATOR1.nickname as string),
    SECOND: new Requester(CREATOR2.id as string, CREATOR2.fullName as string, CREATOR2.nickname as string),
    UNKNOWN: johnDoe
};
