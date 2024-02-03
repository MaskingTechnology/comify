
import database from '../../../integrations/database/module';

import type Requester from '../../authentication/Requester';

import { RECORD_TYPE } from './constants';
import CreatorData from './CreatorData';

export default async function create(email: string, fullName: string, nickname: string, portrait?: string, requester?: Requester): Promise<CreatorData>
{
    const creatorId = await database.createRecord(RECORD_TYPE, { email, fullName, nickname, portrait });

    return new CreatorData(creatorId, fullName, nickname, email, portrait);
}
