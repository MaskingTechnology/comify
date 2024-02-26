
import database, { RecordData } from '../../../integrations/database/module';
import { RECORD_TYPE } from './constants';
import CreatorData from './CreatorData';

export default async function create(fullName: string, nickname: string, email: string, portrait?: string): Promise<CreatorData>
{
    const joinedAt = new Date();
    const popularity = 0;
    const postCount = 0;
    const followerCount = 0;
    const followingCount = 0;
    const record: RecordData = { fullName, nickname, email, portrait, joinedAt, popularity, postCount, followerCount, followingCount };

    const creatorId = await database.createRecord(RECORD_TYPE, record);

    return new CreatorData(creatorId, fullName, nickname, email, portrait, joinedAt, popularity, postCount, followerCount, followingCount);
}
