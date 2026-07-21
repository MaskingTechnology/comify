
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(tenantId: string, id: string): Promise<Record | undefined>
{
    const query: RecordQuery =
    {
        tenantId: { EQUALS: tenantId },
        id: { EQUALS: id },
        deleted: { EQUALS: false }
    };

    return database.readRecord(RECORD_TYPE, query) as Promise<Record | undefined>;
}
