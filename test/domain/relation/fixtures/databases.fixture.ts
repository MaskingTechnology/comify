
import database from '^/integrations/database';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';
import { RECORD_TYPE as CREATOR_METRICS_RECORD_TYPE } from '^/domain/creator.metrics';
import { RECORD_TYPE as RELATION_RECORD_TYPE } from '^/domain/relation';

import { RECORDS } from './records.fixture';

database.connect();

async function withEverything(): Promise<void>
{
    database.clear();

    const promises = [
        RECORDS.CREATORS.map(creator => database.createRecord(CREATOR_RECORD_TYPE, { ...creator })),
        RECORDS.CREATOR_METRICS.map(creatorMetric => database.createRecord(CREATOR_METRICS_RECORD_TYPE, { ...creatorMetric })),
        RECORDS.RELATIONS.map(relation => database.createRecord(RELATION_RECORD_TYPE, { ...relation }))
    ];

    await Promise.all(promises.flat());
}

export const DATABASES = { withEverything };
