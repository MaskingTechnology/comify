
import database from '@theshelf/database';

import { RECORD_TYPE } from '../definitions';

export default async function undeleteData(id: string): Promise<void>
{
    return database.updateRecord(RECORD_TYPE, id, { deleted: false });
}
