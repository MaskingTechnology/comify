
import logger from '@comify/common/integrations/logging';

import { type Record } from '../definitions';

import retrieve from './retrieve';
import CreatorMetricsNotFound from './CreatorMetricsNotFound';

export default async function run(creatorId: string): Promise<Record>
{
    const record = await retrieve(creatorId);

    if (record === undefined)
    {
        logger.warn(`Metrics for creator '${creatorId}' could not be found.`);

        throw new CreatorMetricsNotFound();
    }

    return record;
}

export { CreatorMetricsNotFound };
