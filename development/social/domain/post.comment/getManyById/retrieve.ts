
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, Record } from '../definitions';

export default async function (ids: string[]): Promise<Record[]>
{
    return database.searchRecords<Record>(RECORD_TYPE, {
        id: { IN: ids }
    });
}
