
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';

export default async function deleteData(id: string): Promise<void>
{
    // This function could be moved to a separate feature, but we keep it here
    // to demonstrate that separate parts of a feature can be segmented.

    return database.updateRecord(RECORD_TYPE, id, { deleted: true });
}
