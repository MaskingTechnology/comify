
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';

export default async function erase(relationId: string): Promise<void>
{
    await database.deleteRecord(RECORD_TYPE, relationId);
}
