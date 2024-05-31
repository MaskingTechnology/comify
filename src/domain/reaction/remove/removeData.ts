
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export default async function removeData(id: string): Promise<void>
{
    return database.updateRecord(RECORD_TYPE, id, { deleted: true });
}
