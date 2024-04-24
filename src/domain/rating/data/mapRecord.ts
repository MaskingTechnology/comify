
import type { RecordData } from '^/integrations/database/module';

import RatingData from './RatingData';

export default function mapRecord(record: RecordData): RatingData
{
    return new RatingData(
        record.id as string,
        record.creatorId as string,
        record.postId as string,
        record.reactionId as string,
        new Date(record.createdAt as string)
    );
}
