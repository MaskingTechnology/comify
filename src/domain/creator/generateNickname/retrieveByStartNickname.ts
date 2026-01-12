
import type { RecordSort } from '@theshelf/database';
import { SortDirections } from '@theshelf/database';

import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveByStartNickname(tenantId: string, nickname: string): Promise<DataModel | undefined>
{
    const query = {
        tenantId: { 'EQUALS': tenantId },
        nickname: { 'STARTS_WITH': nickname }
    };

    const sort: RecordSort = { 'nickname': SortDirections.DESCENDING };

    return database.readRecord(RECORD_TYPE, query, undefined, sort) as Promise<DataModel | undefined>;
};
