
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (id: string): Promise<boolean>
{
    const result = await database.deleteRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });

    return result > 0;
}
