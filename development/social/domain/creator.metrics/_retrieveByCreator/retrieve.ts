
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

import CreatorMetricsNotFound from './CreatorMetricsNotFound';

export default async function (creatorId: string): Promise<Record>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, {
        creatorId: { EQUALS: creatorId }
    });

    if (result.notFound)
    {
        logger.warn(`Metrics for creator '${creatorId}' could not be found.`);

        throw new CreatorMetricsNotFound();
    }

    return result.record!;
}
