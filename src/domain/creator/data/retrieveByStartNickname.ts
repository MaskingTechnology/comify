
import database, { RecordSort, SortDirections } from '../../../integrations/database/module';
import CreatorData from './CreatorData';
import { RECORD_TYPE } from './constants';
import createData from './createData';

export default async function retrieveByStartNickname(nickname: string): Promise<CreatorData | undefined>
{
    const sort: RecordSort = { 'nickname': SortDirections.DESCENDING };
    const result = await database.findRecord(RECORD_TYPE, { nickname: { STARTS_WITH: nickname } }, undefined, sort);

    return result !== undefined
        ? createData(result)
        : undefined;
}
