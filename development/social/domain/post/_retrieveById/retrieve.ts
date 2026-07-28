
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (tenantId: string, id: string): Promise<Record | undefined>
{
    return database.readRecord<Record>(RECORD_TYPE, {
        tenantId: { EQUALS: tenantId },
        id: { EQUALS: id },
        deleted: { EQUALS: false }
    });
}
