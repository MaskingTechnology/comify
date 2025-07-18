
import database from '^/integrations/database';

import { RECORD_TYPE as TENANT_RECORD_TYPE } from '^/domain/tenant';

import { RECORDS } from './records.fixtures';

database.connect();

async function tenantsAndOrigins(): Promise<void>
{
    RECORDS.TENANTS.map(tenants => database.createRecord(TENANT_RECORD_TYPE, { ...tenants }));
}

export const DATABASES = { tenantsAndOrigins };
