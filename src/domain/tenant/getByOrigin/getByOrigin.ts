
import { RECORD_TYPE } from '^/domain/tenant';

import database, { type RecordQuery } from '^/integrations/database';

import type { DataModel } from '../types';

import TenantNotFound from './TenantNotFound';

export default async function getByOrigin(origin: string): Promise<DataModel>
{
    const query: RecordQuery =
    {
        origins: { 'EQUALS': origin }
    };

    const record = await database.findRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        throw new TenantNotFound(origin);
    }

    return record as DataModel;
}
