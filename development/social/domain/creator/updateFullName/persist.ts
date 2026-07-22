
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function persist(id: string, fullName: string): Promise<boolean>
{
    const result = await database.updateRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } }, { fullName });

    return result > 0;
}
