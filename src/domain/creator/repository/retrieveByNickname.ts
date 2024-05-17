
import database from '^/integrations/database/module';

import type CreatorData from '../data/CreatorData';
import { RECORD_TYPE } from '../definitions/constants';
import mapRecord from './mapFrom';

export default async function retrieveByNickname(nickname: string): Promise<CreatorData | undefined>
{
    const record = await database.findRecord(RECORD_TYPE, { nickname: { EQUALS: nickname } });

    return record !== undefined
        ? mapRecord(record)
        : undefined;
}
