
import database, { RecordData } from '../../../integrations/database/module';
import { RECORD_TYPE } from '../definitions/constants';
import CreatorData from './CreatorData';

export default async function update(data: CreatorData): Promise<void>
{
    const record: RecordData =
    {
        fullName: data.fullName,
        nickname: data.nickname,
        email: data.email,
        portraitId: data.portraitId,
        // Skipping joinedAt because it's not supposed to be updated
        popularity: data.popularity,
        postCount: data.postCount,
        followerCount: data.followerCount,
        followingCount: data.followingCount
    };

    await database.updateRecord(RECORD_TYPE, data.id, record);
}
