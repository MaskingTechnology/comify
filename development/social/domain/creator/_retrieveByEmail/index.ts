
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Data } from '../definitions';

export default async function run(tenantId: string, email: string): Promise<Data | undefined>
{
    const query = {
        tenantId: { EQUALS: tenantId },
        email: { EQUALS: email }
    };

    return database.readRecord(RECORD_TYPE, query) as Promise<Data | undefined>;
}
