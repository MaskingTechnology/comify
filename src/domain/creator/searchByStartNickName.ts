
import database from '../../integrations/database/module';

import { RecordSort, SortDirections } from '../../integrations/database/module';
import { RECORD_TYPE } from './constants';

export default async function searchByStartNickName(nickname: string): Promise<string | undefined>
{
    const sort: RecordSort = { 'nickName': SortDirections.DESCENDING };
    const result = await database.findRecord(RECORD_TYPE, { nickName: { STARTS_WITH: nickname } }, ['nickName'], sort);

    return result?.nickName as string;
}
