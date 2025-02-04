
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default async function createData(fullName: string, nickname: string, email: string, portraitId: string | undefined = undefined): Promise<DataModel>
{
    return {
        id: generateId(),
        fullName,
        nickname,
        email,
        portraitId: portraitId,
        joinedAt: new Date().toISOString()
    };
}
