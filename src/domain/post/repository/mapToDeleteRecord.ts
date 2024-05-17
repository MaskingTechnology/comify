
import { type RecordData } from '^/integrations/database/module';

import type PostData from '../data/PostData';

export default function mapToDeleteRecord(data: PostData): RecordData
{
    return {
        id: data.id,
        creatorId: data.creatorId,
        comicId: data.comicId,
        createdAt: data.createdAt.toISOString(),
        ratingCount: data.ratingCount,
        reactionCount: data.reactionCount,
        deleted: true
    };
}
