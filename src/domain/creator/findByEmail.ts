
import database from '../../integrations/database/module';

import Creator from './Creator';
import { RECORD_TYPE } from './constants';
import mapCreator from './mapCreator';

export default async function findByEmail(email: string): Promise<Creator | undefined>
{
    const record = await database.findRecord(RECORD_TYPE, { email: { EQUALS: email } });

    return record !== undefined
        ? mapCreator(record)
        : undefined;
}
