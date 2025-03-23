
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';

export default async function remove(id: string): Promise<void>
{
    return database.updateRecord(RECORD_TYPE, id, { deleted: true }) as Promise<void>;
}
