
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import CreatorData from './CreatorData';
import mapRecord from './mapRecord';

export default async function retrieveByEmail(email: string): Promise<CreatorData | undefined>
{
    const record = await database.findRecord(RECORD_TYPE, { email: { EQUALS: email } });

    return record !== undefined
        ? mapRecord(record)
        : undefined;
}
