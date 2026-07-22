
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function insertData(record: Record): Promise<string>
{
    return database.createRecord<Record>(RECORD_TYPE, record);
}
