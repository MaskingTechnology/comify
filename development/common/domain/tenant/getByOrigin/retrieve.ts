
import database from '^/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(origin: string): Promise<Record | undefined>
{
    return database.readRecord<Record>(RECORD_TYPE, { origins: { CONTAINS: origin } });
}
