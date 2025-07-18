
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveByNickname(nickname: string, tenantId: string | undefined = undefined): Promise<DataModel | undefined>
{
    const query = {
        nickname: { 'EQUALS': nickname },
        tenantId: { 'EQUALS': tenantId }
    };

    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel | undefined>;
}
