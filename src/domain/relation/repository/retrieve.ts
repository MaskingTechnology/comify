
import database, { type RecordQuery } from '^/integrations/database/module';

import RelationData from '../data/RelationData';
import createWithoutId from '../data/createWithoutId';
import { RECORD_TYPE } from '../definitions/constants';
import mapTo from './mapTo';

export default async function retrieve(followerId: string, followingId: string): Promise<RelationData>
{
    const query: RecordQuery = {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    };

    const record = await database.findRecord(RECORD_TYPE, query);

    if (record !== undefined)
    {
        return mapTo(record);
    }

    return createWithoutId(followerId, followingId);
}
