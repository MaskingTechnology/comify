
import type { RecordQuery } from '@theshelf/database';

import database from '^/integrations/database';
import logger from '^/integrations/logging';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

import PostNotFound from './PostNotFound';

export default async function getById(tenantId: string, id: string): Promise<DataModel>
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
        logger.logWarn(`Post with id '${id}' could not be found.`);

        throw new PostNotFound();
    }

    return record as DataModel;
}
