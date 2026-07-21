
import database from '@comify/common/integrations/database';

import { RECORD_TYPE } from '../definitions';

export default async function persist(id: string, reactions: number): Promise<boolean>
{
    const result = await database.updateRecord(RECORD_TYPE, { id: { EQUALS: id } }, { reactions });

    return result > 0;
}
