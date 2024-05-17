
import database, { type RecordData } from '^/integrations/database/module';

import type PostData from '../data/PostData';
import { RECORD_TYPE } from '../definitions/constants';

export default async function update(data: PostData): Promise<void>
{
    const record: RecordData =
    {
        creatorId: data.creatorId,
        comicId: data.comicId,
        createdAt: data.createdAt.toISOString(),
        ratingCount: data.ratingCount,
        reactionCount: data.reactionCount
    };

    return database.updateRecord(RECORD_TYPE, data.id, record);
}
