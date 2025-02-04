
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';

export default async function erase(id: string): Promise<void>
{
    return database.deleteRecord(RECORD_TYPE, id);
}
