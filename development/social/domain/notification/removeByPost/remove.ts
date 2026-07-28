
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (ids: string[]): Promise<boolean>
{
    const result = await database.updateRecord<Record>(RECORD_TYPE, { id: { IN: ids } }, { deleted: true });

    return result === ids.length;
}
