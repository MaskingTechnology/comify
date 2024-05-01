
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import type RelationData from './RelationData';
import createRelationData from './mapRecord';

export default async function retrieveByFollowing(followingId: string): Promise<RelationData[]>
{
    const records = await database.searchRecords(RECORD_TYPE, { followingId: { EQUALS: followingId } });

    return Promise.all(records.map(createRelationData));
}
