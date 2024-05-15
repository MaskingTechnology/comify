
import database, { RecordData } from '^/integrations/database/module';
import { generateId } from '^/integrations/utilities/crypto';

import { RECORD_TYPE } from '../definitions/constants';
import RelationData from './RelationData';

export default async function create(followerId: string, followingId: string): Promise<RelationData>
{
    const id = generateId();

    const record: RecordData = { id, followerId, followingId };

    await database.createRecord(RECORD_TYPE, record);

    return new RelationData(id, followerId, followingId);
}
