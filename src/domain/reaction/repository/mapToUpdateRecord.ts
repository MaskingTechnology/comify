
import { type RecordData } from '^/integrations/database/module';

import type ReactionData from '../data/ReactionData';

export default function mapToUpdateRecord(data: ReactionData): RecordData
{
    return {
        id: data.id,
        creatorId: data.creatorId,
        postId: data.postId,
        comicId: data.comicId,
        commentId: data.commentId,
        ratingCount: data.ratingCount,
        createdAt: data.createdAt,
        // deleted is not updated
    };
}
