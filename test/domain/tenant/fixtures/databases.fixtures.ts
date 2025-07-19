
import database from '^/integrations/database';

import { RECORD_TYPE as TENANT_RECORD_TYPE } from '^/domain/tenant';

import { RECORDS } from './records.fixtures';

await database.connect();

async function tenants(): Promise<void>
{
    await database.clear();

    const promises = [
        RECORDS.TENANTS.map(tenant => database.createRecord(TENANT_RECORD_TYPE, { ...tenant }))
    ];

    await Promise.all(promises.flat());
}

export const DATABASES = { tenants };
