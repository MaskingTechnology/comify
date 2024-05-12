
import type Requester from '../authentication/Requester';
import type RatingData from './data/RatingData';
import create from './data/create';
import erase from './data/erase';
import find from './data/find';

export default async function update(requester: Requester, postId: string | undefined, reactionId: string | undefined): Promise<RatingData | void>
{
    const data = await find(requester.id, postId, reactionId);

    return data === undefined
        ? create(requester.id, postId, reactionId)
        : erase(data.id);
}
