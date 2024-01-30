
import database from '../../../integrations/database/module';

import { RECORD_TYPE } from './constants';
import CreatorData from './CreatorData';

export default async function create(email: string, fullName: string, nickName: string, portrait?: string): Promise<CreatorData>
{
    const creatorId = await database.createRecord(RECORD_TYPE, { email, fullName, nickName, portrait });

    return new CreatorData(creatorId, fullName, nickName, email, portrait);
}
