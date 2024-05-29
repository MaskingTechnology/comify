
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default async function createData(fullName: string, nickname: string, email: string, portraitId?: string): Promise<DataModel>
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
