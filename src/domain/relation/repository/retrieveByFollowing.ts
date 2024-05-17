
import database, { type RecordQuery } from '^/integrations/database/module';

import type RelationData from '../data/RelationData';
import { RECORD_TYPE } from '../definitions/constants';
import createRelationData from './mapTo';

export default async function retrieveByFollowing(followingId: string): Promise<RelationData[]>
{
    const query: RecordQuery = { followingId: { EQUALS: followingId } };

    const records = await database.searchRecords(RECORD_TYPE, query);

    return Promise.all(records.map(createRelationData));
}
