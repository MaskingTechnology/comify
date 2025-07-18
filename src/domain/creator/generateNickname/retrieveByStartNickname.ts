
import type { RecordSort } from '^/integrations/database';
import database, { SortDirections } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveByStartNickname(nickname: string, tenantId: string | undefined = undefined): Promise<DataModel | undefined>
{
    const query = {
        nickname: { 'STARTS_WITH': nickname },
        tenantId: { 'EQUALS': tenantId }
    };

    const sort: RecordSort = { 'nickname': SortDirections.DESCENDING };

    return database.findRecord(RECORD_TYPE, query, undefined, sort) as Promise<DataModel | undefined>;
}
