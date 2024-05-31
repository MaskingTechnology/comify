
import database, { RecordSort, SortDirections } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveByStartNickname(nickname: string): Promise<DataModel | undefined>
{
    const query = { nickname: { STARTS_WITH: nickname } };
    const sort: RecordSort = { 'nickname': SortDirections.DESCENDING };

    return database.findRecord(RECORD_TYPE, query, undefined, sort) as Promise<DataModel | undefined>;
}
