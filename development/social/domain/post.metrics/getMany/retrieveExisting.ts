
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (postIds: string[]): Promise<Record[]>
{
    const result = await database.searchRecords<Record>(RECORD_TYPE, {
        postId: { IN: postIds }
    });

    return result.records;
}
