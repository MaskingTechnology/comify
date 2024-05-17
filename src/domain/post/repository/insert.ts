
import database from '^/integrations/database/module';

import type PostData from '../data/PostData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToInsert from './mapToInsert';

export default async function insert(data: PostData): Promise<string>
{
    const record = mapToInsert(data);

    return database.createRecord(RECORD_TYPE, record);
}
