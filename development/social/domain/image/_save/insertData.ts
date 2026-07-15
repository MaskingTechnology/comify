
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Data } from '../definitions';

export default async function insertData(data: Data): Promise<string>
{
    return database.createRecord(RECORD_TYPE, data);
}
