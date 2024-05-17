
import database from '^/integrations/database/module';

import type PostData from '../data/PostData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToNewRecord';

export default async function insert(data: PostData): Promise<string>
{
    const record = mapToRecord(data);

    return database.createRecord(RECORD_TYPE, record);
}
