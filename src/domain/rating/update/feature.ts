
import type { Requester } from '^/domain/authentication/types';

import createData from './createData';
import eraseData from './eraseData';
import getData from './getData';
import insertData from './insertData';

export default async function feature(requester: Requester, postId: string | undefined, reactionId: string | undefined): Promise<string | void>
{
    const data = await getData(requester.id, postId, reactionId);

    if (data !== undefined)
    {
        return eraseData(data.id);
    }

    const newData = createData(requester.id, postId, reactionId);

    return insertData(newData);
}
