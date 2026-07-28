
import { SortDirections, type RecordQuery, type RecordSort } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (tenantId: string, nickname: string): Promise<Record | undefined>
{
    const query: RecordQuery<Record> = {
        tenantId: { 'EQUALS': tenantId },
        nickname: { 'STARTS_WITH': nickname }
    };

    const sort: RecordSort<Record> = {
        nickname: SortDirections.DESCENDING
    };

    return database.readRecord<Record>(RECORD_TYPE, query, undefined, sort);
};
