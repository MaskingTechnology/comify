
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(creatorId: string): Promise<Record | undefined>
{
    const query = { creatorId: { EQUALS: creatorId } };

    return database.readRecord(RECORD_TYPE, query) as Promise<Record | undefined>;
}
