
import database from '@theshelf/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import CreatorMetricsNotFound from './CreatorMetricsNotFound';

export default async function getByCreator(creatorId: string): Promise<DataModel>
{
    const query = { creatorId: { EQUALS: creatorId } };

    const data = await database.findRecord(RECORD_TYPE, query) as DataModel;

    if (data === undefined)
    {
        throw new CreatorMetricsNotFound();
    }

    return data;
}
