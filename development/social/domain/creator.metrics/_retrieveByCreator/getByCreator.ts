
import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE, type Data } from '../definitions';
import CreatorMetricsNotFound from './CreatorMetricsNotFound';

export default async function getByCreator(creatorId: string): Promise<Data>
{
    const query = { creatorId: { EQUALS: creatorId } };

    const record = await database.readRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        logger.warn(`Metrics for creator '${creatorId}' could not be found.`);

        throw new CreatorMetricsNotFound();
    }

    return record as Data;
}
