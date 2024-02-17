
import database, { RecordQuery } from '../../../integrations/database/module';

import RelationData from './RelationData';
import { RECORD_TYPE } from './constants';

export default async function retrieve(followerId: string, followingId: string): Promise<RelationData>
{
    const query: RecordQuery = {
        'AND'
            : [
                { followerId: { EQUALS: followerId } },
                { followingid: { EQUALS: followingId } }
            ]
    };

    const relation = await database.findRecord(RECORD_TYPE, query);
    const relationId = relation !== undefined
        ? relation.id
        : undefined;

    return new RelationData(relationId as string, followerId, followingId);
}
