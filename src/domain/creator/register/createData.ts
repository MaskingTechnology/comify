
import { generateId } from '^/integrations/utilities/crypto';

import { DataModel } from '../types';

export default async function create(fullName: string, nickname: string, email: string, portraitId?: string): Promise<DataModel>
{
    return {
        id: generateId(),
        fullName,
        nickname,
        email,
        portraitId: portraitId,
        joinedAt: new Date().toISOString(),
        postCount: 0,
        followerCount: 0,
        followingCount: 0
    };
}
