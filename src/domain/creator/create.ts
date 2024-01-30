
import database from '../../integrations/database/module';

import CreatorData from './CreatorData';
import { RECORD_TYPE } from './constants';
import generateNickname from './generateNickname';

export default async function create(email: string, fullname: string, nickname?: string, portrait?: string): Promise<CreatorData>
{
    const nickName = await generateNickname(nickname ?? fullname);

    const creatorId = await database.createRecord(RECORD_TYPE, { email, fullname, nickName, portrait });

    return new CreatorData(creatorId, fullname, nickName, email, portrait);
}
