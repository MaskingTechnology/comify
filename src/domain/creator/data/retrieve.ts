
import database from '../../../integrations/database/module';

import { RECORD_TYPE } from './constants';
import CreatorData from './CreatorData';
import createData from './createData';

export default async function retrieve(id: string): Promise<CreatorData>
{
    const record = await database.readRecord(RECORD_TYPE, id);

    return createData(record);
}
