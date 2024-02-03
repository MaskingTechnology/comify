
import database from '../../../integrations/database/module';

import type Requester from '../../authentication/Requester';

import { RECORD_TYPE } from './constants';
import CreatorData from './CreatorData';
import createData from './createData';

export default async function retrieveByNickname(nickname: string, requester?: Requester): Promise<CreatorData | undefined>
{
    const record = await database.findRecord(RECORD_TYPE, { nickName: { EQUALS: nickname } });

    return record !== undefined
        ? createData(record)
        : undefined;
}
