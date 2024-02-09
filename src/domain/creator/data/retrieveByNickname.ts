
import database from '../../../integrations/database/module';
import CreatorData from './CreatorData';
import { RECORD_TYPE } from './constants';
import createData from './createData';

export default async function retrieveByNickname(nickname: string): Promise<CreatorData | undefined>
{
    const record = await database.findRecord(RECORD_TYPE, { nickname: { EQUALS: nickname } });

    return record !== undefined
        ? createData(record)
        : undefined;
}
