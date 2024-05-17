
import { generateId } from '^/integrations/utilities/crypto';

import CreatorData from './CreatorData';

export default function createData(fullName: string, nickname: string, email: string, portraitId?: string): CreatorData
{
    const id = generateId();
    const joinedAt = new Date();
    const popularity = 0;
    const postCount = 0;
    const followerCount = 0;
    const followingCount = 0;

    return new CreatorData(id, fullName, nickname, email, portraitId, joinedAt, popularity, postCount, followerCount, followingCount);
}
