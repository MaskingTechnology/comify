
import { Types } from '../definitions';

import getPost from '^/domain/post/getById';

import create from '../create';

export default async function ratedPost(creatorId: string, postId: string, rated: boolean): Promise<void>
{
    if (rated === false)
    {
        return;
    }

    const post = await getPost(postId);

    return create(Types.RATED_POST, creatorId, post.creatorId, postId);
}
