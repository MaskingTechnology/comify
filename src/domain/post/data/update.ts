
import database, { RecordData } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import type PostData from './PostData';

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

    await database.updateRecord(RECORD_TYPE, data.id, record);
}
