
import type { MemoryDriver } from '@theshelf/database';

import database, { driver } from '^/integrations/database';

import { RECORD_TYPE as TENANT_RECORD_TYPE } from '^/domain/tenant';

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
