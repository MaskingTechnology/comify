
import type Requester from '^/domain/authentication/Requester';

import type RatingData from './data/RatingData';
import createData from './data/createData';
import erase from './repository/erase';
import find from './repository/find';
import insert from './repository/insert';

export default async function update(requester: Requester, postId: string | undefined, reactionId: string | undefined): Promise<RatingData | void>
{
    const data = await find(requester.id, postId, reactionId);

    if (data !== undefined)
    {
        return erase(data.id);
    }

    const rating = createData(requester.id, postId, reactionId);

    await insert(rating);

    return rating;
}
