
import database, { RecordData } from '../../../integrations/database/module';
import { RECORD_TYPE } from './constants';
import PostData from './PostData';

export default async function create(creatorId: string, comicId: string,): Promise<PostData>
{
    const now = new Date();

    const createdAt = now.toISOString();
    const ratingCount = 0;
    const reactionCount = 0;

    const record: RecordData = { creatorId, comicId, createdAt, ratingCount, reactionCount };

    const id = await database.createRecord(RECORD_TYPE, record);

    return new PostData(id, creatorId, comicId, now, ratingCount, reactionCount);
}
