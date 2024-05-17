
import database, { RecordSort, SortDirections } from '^/integrations/database/module';

import type CreatorData from '../data/CreatorData';
import { RECORD_TYPE } from '../definitions/constants';
import mapRecord from './mapFrom';

export default async function retrieveByStartNickname(nickname: string): Promise<CreatorData | undefined>
{
    const sort: RecordSort = { 'nickname': SortDirections.DESCENDING };
    const result = await database.findRecord(RECORD_TYPE, { nickname: { STARTS_WITH: nickname } }, undefined, sort);

    return result !== undefined
        ? mapRecord(result)
        : undefined;
}
