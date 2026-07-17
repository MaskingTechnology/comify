
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieveByNickname(tenantId: string, nickname: string): Promise<Record | undefined>
{
    const query = {
        tenantId: { EQUALS: tenantId },
        nickname: { EQUALS: nickname }
    };

    return database.readRecord(RECORD_TYPE, query) as Promise<Record | undefined>;
}
