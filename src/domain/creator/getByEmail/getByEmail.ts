
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getByEmail(email: string, tenantId: string | undefined = undefined): Promise<DataModel | undefined>
{
    const query = {
        email: { EQUALS: email },
        tenantId: { EQUALS: tenantId }
    };

    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel | undefined>;
}
