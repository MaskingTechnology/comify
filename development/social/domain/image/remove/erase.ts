
import database from '@comify/common/integrations/database';

import { RECORD_TYPE } from '../definitions';

export default async function erase(id: string): Promise<boolean>
{
    const result = await database.deleteRecord(RECORD_TYPE, { id: { EQUALS: id } });

    return result > 0;
}
