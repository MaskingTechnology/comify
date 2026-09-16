
import database from '^/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (origin: string): Promise<Record | undefined>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, { origins: { CONTAINS: origin } });

    return result.record;
}
