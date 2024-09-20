
import type { Requester } from '^/domain/authentication/types';

import createData from './createData';
import eraseData from './eraseData';
import getData from './getData';
import insertData from './insertData';
import validateData from './validateData';

export default async function feature(requester: Requester, postId: string | undefined = undefined, reactionId: string | undefined = undefined): Promise<string | void>
{
    const data = await getData(requester.id, postId, reactionId);

    if (data !== undefined)
    {
        return eraseData(data.id);
    }

    const newData = createData(requester.id, postId, reactionId);

    validateData(newData);

    return insertData(newData);
}
