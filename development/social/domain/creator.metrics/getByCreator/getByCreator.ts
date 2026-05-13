
import database from '^/integrations/database';
import logger from '^/integrations/logging';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import CreatorMetricsNotFound from './CreatorMetricsNotFound';

export default async function getByCreator(creatorId: string): Promise<DataModel>
{
    const query = { creatorId: { EQUALS: creatorId } };

    const record = await database.readRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        logger.warn(`Metrics for creator '${creatorId}' could not be found.`);

        throw new CreatorMetricsNotFound();
    }

    return record as DataModel;
}
