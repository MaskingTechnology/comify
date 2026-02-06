
import type { RecordQuery } from '@theshelf/database';

import database from '^/integrations/database';
import logger from '^/integrations/logging';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import NicknameNotFound from './NicknameNotFound';

export default async function getByNickname(tenantId: string, nickname: string): Promise<DataModel>
{
    const query: RecordQuery = {
        tenantId: { EQUALS: tenantId },
        nickname: { EQUALS: nickname }
    };

    const creator = await database.readRecord(RECORD_TYPE, query);

    if (creator === undefined)
    {
        logger.debug(`Creator for tenant '${tenantId}' with nickname '${nickname}' could not be found.`);

        throw new NicknameNotFound();
    }

    return creator as DataModel;
}
