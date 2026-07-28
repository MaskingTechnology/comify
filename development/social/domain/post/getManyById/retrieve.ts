
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(tenantId: string, ids: string[]): Promise<Record[]>
{
    return database.searchRecords<Record>(RECORD_TYPE, {
        tenantId: { EQUALS: tenantId },
        id: { IN: ids },
        deleted: { EQUALS: false }
    });
}
