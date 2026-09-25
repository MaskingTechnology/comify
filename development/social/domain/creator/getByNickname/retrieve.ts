
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

import NicknameNotFound from './NicknameNotFound';

export default async function (tenantId: string, nickname: string): Promise<Record>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, {
        tenantId: { EQUALS: tenantId },
        nickname: { EQUALS: nickname }
    });

    if (result.notFound)
    {
        logger.debug(`Creator for tenant '${tenantId}' with nickname '${nickname}' could not be found.`);

        throw new NicknameNotFound();
    }

    return result.record!;
}
