
import { MemoryDriver } from '@theshelf/database';

import database, { driver } from '^/integrations/database';

import { RECORD_TYPE as RATING_RECORD_TYPE } from '^/domain/rating';

import { RECORDS } from './records.fixture';

async function withRatings(): Promise<void>
{
    (driver as MemoryDriver).clear();

    const promises = [
        RECORDS.RATINGS.map(rating => database.createRecord(RATING_RECORD_TYPE, { ...rating }))
    ];

    await Promise.all(promises.flat());
}

export const DATABASES = { withRatings };
