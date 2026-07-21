
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE, type Record } from '../definitions';
import NicknameNotFound from './NicknameNotFound';

export default async function getByNickname(tenantId: string, nickname: string): Promise<Record>
{
    const query: RecordQuery = {
        tenantId: { EQUALS: tenantId },
        nickname: { EQUALS: nickname }
    };

    const record = await database.readRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        logger.debug(`Creator for tenant '${tenantId}' with nickname '${nickname}' could not be found.`);

        throw new NicknameNotFound();
    }

    return record as Record;
}

export { NicknameNotFound };
