
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE, type Record } from '../definitions';

import PostNotFound from './PostNotFound';

export default async function run(tenantId: string, id: string): Promise<Record>
{
    const query: RecordQuery =
    {
        tenantId: { EQUALS: tenantId },
        id: { EQUALS: id },
        deleted: { EQUALS: false }
    };

    const record = await database.readRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        logger.warn(`Post with id '${id}' could not be found.`);

        throw new PostNotFound();
    }

    return record as Record;
}
