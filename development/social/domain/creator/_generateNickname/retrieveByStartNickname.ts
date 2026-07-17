
import { SortDirections, type RecordSort } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieveByStartNickname(tenantId: string, nickname: string): Promise<Record | undefined>
{
    const query = {
        tenantId: { 'EQUALS': tenantId },
        nickname: { 'STARTS_WITH': nickname }
    };

    const sort: RecordSort = { 'nickname': SortDirections.DESCENDING };

    return database.readRecord(RECORD_TYPE, query, undefined, sort) as Promise<Record | undefined>;
};
