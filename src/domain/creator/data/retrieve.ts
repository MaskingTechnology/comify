
import database from '../../../integrations/database/module';

import { RECORD_TYPE } from './constants';
import createData from './createData';
import CreatorData from './CreatorData';

export default async function retrieve(creatorId: string): Promise<CreatorData>
{
    const record = await database.readRecord(RECORD_TYPE, creatorId);

    return createData(record);
}
