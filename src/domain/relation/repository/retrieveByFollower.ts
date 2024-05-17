
import database, { type RecordQuery } from '^/integrations/database/module';

import type RelationData from '../data/RelationData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToData from './mapToData';

export default async function retrieveByFollower(followerId: string): Promise<RelationData[]>
{
    const query: RecordQuery = { followerId: { EQUALS: followerId } };

    const records = await database.searchRecords(RECORD_TYPE, query);

    return Promise.all(records.map(record => mapToData(record)));
}
