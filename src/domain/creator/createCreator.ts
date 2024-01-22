
import database from '../../integrations/database/module';

import Creator from './Creator';
import { RECORD_TYPE } from './constants';
import generateNickname from './generateNickname';

export default async function createCreator(email: string, fullname: string, nickname?: string, portrait?: string): Promise<Creator>
{
    const nickName = await generateNickname(nickname ?? fullname);

    const creatorId = await database.createRecord(RECORD_TYPE, { email, fullname, nickName, portrait });

    return new Creator(creatorId, email, fullname, nickName, portrait);
}
