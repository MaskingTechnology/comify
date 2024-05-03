
import database, { RecordData } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import PostData from './PostData';

export default async function update(data: PostData): Promise<void>
{
    const record: RecordData =
    {
        creatorId: data.creatorId,
        comicId: data.comicId,
        createdAt: data.createdAt,
        ratingCount: data.ratingCount,
        reactionCount: data.reactionCount,
        deleted: data.deleted
    };

    await database.updateRecord(RECORD_TYPE, data.id, record);
}
