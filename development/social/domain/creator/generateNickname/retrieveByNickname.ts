
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Data } from '../definitions';

export default async function retrieveByNickname(tenantId: string, nickname: string): Promise<Data | undefined>
{
    const query = {
        tenantId: { 'EQUALS': tenantId },
        nickname: { 'EQUALS': nickname }
    };

    return database.readRecord(RECORD_TYPE, query) as Promise<Data | undefined>;
}
