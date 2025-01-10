
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import NicknameNotFound from './NicknameNotFound';

export default async function getByNickname(nickname: string): Promise<DataModel>
{
    const query = { nickname: { EQUALS: nickname } };

    const data = await database.findRecord(RECORD_TYPE, query) as DataModel;

    if (data === undefined)
    {
        throw new NicknameNotFound(nickname);
    }

    return data;
}
