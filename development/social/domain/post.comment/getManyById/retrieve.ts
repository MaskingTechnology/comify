
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, Record } from '../definitions';

export default async function retrieve(ids: string[]): Promise<Record[]>
{
    return database.searchRecords<Record>(RECORD_TYPE, {
        id: { IN: ids }
    });
}
