
import database, { RecordData } from '^/integrations/database/module';
import { generateId } from '^/integrations/utilities/crypto';

import { RECORD_TYPE } from '../definitions/constants';
import RatingData from './RatingData';

export default async function create(creatorId: string, postId: string | undefined, reactionId: string | undefined): Promise<RatingData>
{
    const id = generateId();
    const now = new Date();

    const createdAt = now.toISOString();

    const record: RecordData = { id, creatorId, postId, reactionId, createdAt };

    await database.createRecord(RECORD_TYPE, record);

    return new RatingData(id, creatorId, postId, reactionId, now);
}
