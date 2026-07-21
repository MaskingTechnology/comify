
import database from '@comify/common/integrations/database';

import { RECORD_TYPE } from '../definitions';

export default async function persist(ids: string[]): Promise<boolean>
{
    const result = await database.updateRecord(RECORD_TYPE, { id: { IN: ids } }, { deleted: true });

    return result === ids.length;
}
