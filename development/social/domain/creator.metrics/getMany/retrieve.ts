
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(creatorIds: string[]): Promise<Record[]>
{
    return database.searchRecords<Record>(RECORD_TYPE, {
        creatorId: { IN: creatorIds }
    });
}
