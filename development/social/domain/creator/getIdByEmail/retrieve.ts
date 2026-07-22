
import { type Tenant } from '@comify/common/domain/tenant';
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(tenantId: string, email: string): Promise<Record | undefined>
{
    return database.readRecord<Record>(RECORD_TYPE, {
        tenantId: { EQUALS: tenantId },
        email: { EQUALS: email }
    });
}
