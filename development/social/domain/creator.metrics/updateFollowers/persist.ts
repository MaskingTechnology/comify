
import database from '@comify/common/integrations/database';

import { RECORD_TYPE } from '../definitions';

export default async function update(id: string, followers: number): Promise<boolean>
{
    const result = await database.updateRecord(RECORD_TYPE, { id: { EQUALS: id } }, { followers });

    return result > 0;
}
