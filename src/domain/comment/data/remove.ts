
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';

export default async function remove(id: string): Promise<void>
{
    return database.deleteRecord(RECORD_TYPE, id);
}
