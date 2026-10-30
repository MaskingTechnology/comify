
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (record: Record): Promise<string>
{
    const result = await database.createRecord<Record>(RECORD_TYPE, record);

    return result.recordId;
}
