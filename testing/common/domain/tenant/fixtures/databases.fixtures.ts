
import { type MemoryDriver } from '@theshelf/database';

import { RECORD_TYPE as TENANT_RECORD_TYPE } from '@comify/common/domain/tenant';
import database, { driver } from '@comify/common/integrations/database';

import { RECORDS } from './records.fixtures';

async function tenants(): Promise<void>
{
    (driver as MemoryDriver).clear();

    const promises = [
        RECORDS.TENANTS.map(tenant => database.createRecord(TENANT_RECORD_TYPE, { ...tenant }))
    ];

    await Promise.all(promises.flat());
}

export const DATABASES = { tenants };
