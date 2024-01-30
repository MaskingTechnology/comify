
import database from '../../../integrations/database/module';

import { RECORD_TYPE } from './constants';
import CreatorData from './CreatorData';
import createData from './createData';

export default async function findByNickName(nickname: string): Promise<CreatorData | undefined>
{
    const record = await database.findRecord(RECORD_TYPE, { nickName: { EQUALS: nickname } });

    return record !== undefined
        ? createData(record)
        : undefined;
}
