
import database, { type RecordQuery } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

import TenantNotFound from './TenantNotFound';

export default async function getByOrigin(origin: string): Promise<DataModel>
{
    const query: RecordQuery =
    {
        origins: { 'CONTAINS': origin }
    };

    const record = await database.findRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        throw new TenantNotFound(origin);
    }

    return record as DataModel;
}
