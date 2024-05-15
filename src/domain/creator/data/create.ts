
import database, { RecordData } from '^/integrations/database/module';
import { generateId } from '^/integrations/utilities/crypto';

import { RECORD_TYPE } from '../definitions/constants';
import CreatorData from './CreatorData';

export default async function create(fullName: string, nickname: string, email: string, portrait?: string): Promise<CreatorData>
{
    const id = generateId();
    const now = new Date();

    const joinedAt = now.toISOString();
    const popularity = 0;
    const postCount = 0;
    const followerCount = 0;
    const followingCount = 0;

    const record: RecordData = { id, fullName, nickname, email, portrait, joinedAt, popularity, postCount, followerCount, followingCount };

    await database.createRecord(RECORD_TYPE, record);

    return new CreatorData(id, fullName, nickname, email, portrait, now, popularity, postCount, followerCount, followingCount);
}
