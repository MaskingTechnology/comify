
import type { RecordQuery } from '^/integrations/database';
import database from '^/integrations/database';

import type { DataModel } from '^/domain/tenant';
import getById from '^/domain/tenant/getById';

import { RECORD_TYPE } from '../definitions';
import type { DataModel as Host } from '../types';

export default async function getByHostname(name: string): Promise<DataModel | undefined>
{
    const query: RecordQuery =
    {
        hostname: { 'EQUALS': name }
    };

    const host = await database.findRecord(RECORD_TYPE, query) as Host;

    if (host === undefined)
    {
        return;
    }

    return getById(host.tenantId);
}
