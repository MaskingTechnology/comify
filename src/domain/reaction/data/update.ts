
import database, { RecordData } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import type ReactionData from './ReactionData';

export default async function update(data: ReactionData): Promise<void>
{
    const record: RecordData =
    {
        creatorId: data.creatorId,
        postId: data.postId,
        comicId: data.comicId,
        commentId: data.commentId,
        createdAt: data.createdAt,
        ratingCount: data.ratingCount,
        deleted: data.deleted,
    };

    await database.updateRecord(RECORD_TYPE, data.id, record);
}
