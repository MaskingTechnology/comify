
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (tenantId: string, email: string): Promise<Record | undefined>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, {
        tenantId: { EQUALS: tenantId },
        email: { EQUALS: email }
    });

    return result.record;
}
