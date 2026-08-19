
import { type RatingKey } from '../../definitions';

import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function (key: RatingKey): Promise<string>
{
    const newData = createRecord(key.creatorId, key.postId);

    validate(newData);

    return persist(newData);
}
