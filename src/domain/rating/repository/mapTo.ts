
import { type RecordData } from '^/integrations/database/module';

import type RatingData from '../data/RatingData';

export default function mapTo(data: RatingData): RecordData
{
    return {
        id: data.id,
        creatorId: data.creatorId,
        postId: data.postId,
        reactionId: data.reactionId,
        createdAt: data.createdAt.toISOString()
    };
}
