
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export default async function eraseData(id: string): Promise<void>
{
    return database.deleteRecord(RECORD_TYPE, id);
}
