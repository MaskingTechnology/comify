
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getByEmail(tenantId: string, email: string): Promise<DataModel | undefined>
{
    const query = {
        tenantId: { EQUALS: tenantId },
        email: { EQUALS: email }
    };

    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel | undefined>;
}
