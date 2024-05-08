
import database, { RecordData } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import RatingData from './RatingData';

export default async function create(creatorId: string, postId: string | undefined, reactionId: string | undefined): Promise<RatingData>
{
    const createdAt = new Date();
    const data: RecordData = { creatorId, postId, reactionId, createdAt };
    const ratingId = await database.createRecord(RECORD_TYPE, data);

    return new RatingData(ratingId, creatorId, postId, reactionId, createdAt);
}
