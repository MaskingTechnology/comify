
import type { RecordData } from '^/integrations/database/module';

import type CreatorData from '../data/CreatorData';

export default function mapToNewRecord(data: CreatorData): RecordData
{
    return {
        id: data.id,
        fullName: data.fullName,
        nickname: data.nickname,
        email: data.email,
        portraitId: data.portraitId,
        joinedAt: data.joinedAt.toISOString(),
        popularity: data.popularity,
        postCount: data.postCount,
        followerCount: data.followerCount,
        followingCount: data.followingCount
    };
}
