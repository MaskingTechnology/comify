
import type { RecordData } from '^/integrations/database/module';

import ReactionData from '../data/ReactionData';

export default function mapToData(record: RecordData): ReactionData
{
    return new ReactionData(
        record.id as string,
        record.creatorId as string,
        record.postId as string,
        record.comicId as string,
        record.commentId as string,
        record.ratingCount as number,
        new Date(record.createdAt as string)
    );
}
