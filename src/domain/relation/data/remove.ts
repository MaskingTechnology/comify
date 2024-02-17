
import database from '../../../integrations/database/module';

import { RECORD_TYPE } from './constants';

export default async function remove(relationId: string): Promise<void>
{
    await database.deleteRecord(RECORD_TYPE, relationId);
}
