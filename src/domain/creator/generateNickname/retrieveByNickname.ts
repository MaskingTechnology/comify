
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveByNickname(nickname: string): Promise<DataModel | undefined>
{
    const query = { nickname: { EQUALS: nickname } };

    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel | undefined>;
}
