
import database from '../../integrations/database/module';

import CreatorData from './CreatorData.js';
import { RECORD_TYPE } from './constants';
import createData from './createData';

export default async function findByEmail(email: string): Promise<CreatorData | undefined>
{
    const record = await database.findRecord(RECORD_TYPE, { email: { EQUALS: email } });

    return record !== undefined
        ? createData(record)
        : undefined;
}
