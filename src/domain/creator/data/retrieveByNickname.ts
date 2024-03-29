
import database from '../../../integrations/database/module';
import { RECORD_TYPE } from '../definitions/constants';
import CreatorData from './CreatorData';
import mapRecord from './mapRecord';

export default async function retrieveByNickname(nickname: string): Promise<CreatorData | undefined>
{
    const record = await database.findRecord(RECORD_TYPE, { nickname: { EQUALS: nickname } });

    return record !== undefined
        ? mapRecord(record)
        : undefined;
}
