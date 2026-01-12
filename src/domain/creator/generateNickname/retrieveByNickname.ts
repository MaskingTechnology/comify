
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveByNickname(tenantId: string, nickname: string): Promise<DataModel | undefined>
{
    const query = {
        tenantId: { 'EQUALS': tenantId },
        nickname: { 'EQUALS': nickname }
    };

    return database.readRecord(RECORD_TYPE, query) as Promise<DataModel | undefined>;
}
