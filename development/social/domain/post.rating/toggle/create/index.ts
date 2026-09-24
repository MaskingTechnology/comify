
import { type RatingKey } from '../../definitions';

import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function (key: RatingKey): Promise<string>
{
    validate(key.postId);

    const newData = createRecord(key.creatorId, key.postId);

    return persist(newData);
}
