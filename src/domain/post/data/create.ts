
import database, { RecordData } from '^/integrations/database/module';
import { generateId } from '^/integrations/utilities/crypto';

import { RECORD_TYPE } from '../definitions/constants';
import PostData from './PostData';
import mapRecord from './mapRecord';

export default async function create(creatorId: string, comicId: string,): Promise<PostData>
{
    const id = generateId();
    const createdAt = new Date().toISOString();
    const ratingCount = 0;
    const reactionCount = 0;
    const deleted = false;

    const record: RecordData = { id, creatorId, comicId, createdAt, ratingCount, reactionCount, deleted };

    await database.createRecord(RECORD_TYPE, record);

    return mapRecord(record);
}
