
import { type RelationKey } from '../../definitions';

import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function (key: RelationKey): Promise<string>
{
    validate(key);

    const record = createRecord(key.followerId, key.followingId);

    return persist(record);
}

export { default as InvalidRelation } from './InvalidRelation';
