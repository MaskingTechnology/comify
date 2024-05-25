
import type Requester from '^/domain/authentication/Requester';

import createData from './createData';
import eraseData from './eraseData';
import findData from './findData';
import insertData from './insertData';

export default async function feature(requester: Requester, postId: string | undefined, reactionId: string | undefined): Promise<string | void>
{
    const data = await findData(requester.id, postId, reactionId);

    if (data !== undefined)
    {
        return eraseData(data.id);
    }

    const newData = createData(requester.id, postId, reactionId);

    return insertData(newData);
}
