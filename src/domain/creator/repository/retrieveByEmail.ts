
import database from '^/integrations/database/module';

import type CreatorData from '../data/CreatorData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToData from './mapToData';

export default async function retrieveByEmail(email: string): Promise<CreatorData | undefined>
{
    const record = await database.findRecord(RECORD_TYPE, { email: { EQUALS: email } });

    return record !== undefined
        ? mapToData(record)
        : undefined;
}
