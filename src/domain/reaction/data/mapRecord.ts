
import type { RecordData } from '^/integrations/database/module';

import ReactionData from './ReactionData';

export default function mapRecord(record: RecordData): ReactionData
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
