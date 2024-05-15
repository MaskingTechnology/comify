
import database, { RecordData } from '^/integrations/database/module';
import { generateId } from '^/integrations/utilities/crypto';

import { RECORD_TYPE } from '../definitions/constants';
import ReactionData from './ReactionData';

export default async function create(creatorId: string, postId: string, comicId: string | undefined = undefined, commentId: string | undefined = undefined): Promise<ReactionData>
{
    const id = generateId();
    const now = new Date();

    const createdAt = now.toISOString();
    const ratingCount = 0;
    const deleted = false;

    const record: RecordData = { id, creatorId, postId, comicId, commentId, ratingCount, createdAt, deleted };

    await database.createRecord(RECORD_TYPE, record);

    return new ReactionData(id, creatorId, postId, comicId, commentId, ratingCount, now);
}
