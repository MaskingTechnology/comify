
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (id: string, nickname: string): Promise<boolean>
{
    const result = await database.updateRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } }, { nickname });

    return result > 0;
}
