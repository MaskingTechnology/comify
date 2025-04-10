
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import NicknameNotFound from './NicknameNotFound';

export default async function getByNickname(nickname: string, tenantId: string | undefined = undefined): Promise<DataModel>
{
    const query = {
        nickname: { EQUALS: nickname },
        tenantId: { EQUALS: tenantId }
    };

    const creator = await database.findRecord(RECORD_TYPE, query);

    if (creator === undefined)
    {
        throw new NicknameNotFound(nickname);
    }

    return creator as DataModel;
}
