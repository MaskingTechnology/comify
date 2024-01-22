
import database from '../../integrations/database/module';

import { RecordSort, SortDirections } from '../../integrations/database/module';
import { RECORD_TYPE } from './constants.js';

export default async function searchByStartNickName(nickname: string): Promise<string | undefined>
{
    const sort: RecordSort = { nickname: SortDirections.DESCENDING };
    const result = await database.findRecord(RECORD_TYPE, { nickname: { STARTS_WITH: nickname } }, ['nickname'], sort);

    return result?.nickname as string;
}
