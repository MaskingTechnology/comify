
import { type RecordData } from '^/integrations/database/module';

import RatingData from '../data/RatingData';

export default function mapToData(record: RecordData): RatingData
{
    return new RatingData(
        record.id as string,
        record.creatorId as string,
        record.postId as string,
        record.reactionId as string,
        new Date(record.createdAt as string)
    );
}
