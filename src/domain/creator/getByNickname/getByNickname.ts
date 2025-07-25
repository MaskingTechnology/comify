
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import NicknameNotFound from './NicknameNotFound';

export default async function getByNickname(tenantId: string, nickname: string): Promise<DataModel>
{
    const query = {
        tenantId: { EQUALS: tenantId },
        nickname: { EQUALS: nickname }
    };

    const creator = await database.findRecord(RECORD_TYPE, query);

    if (creator === undefined)
    {
        throw new NicknameNotFound(nickname);
    }

    return creator as DataModel;
}
