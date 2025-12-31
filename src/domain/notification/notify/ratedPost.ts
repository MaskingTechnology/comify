
import getPost from '^/domain/post/getById';

import create from '../create';
import { Types } from '../definitions';

export default async function ratedPost(tenantId: string, creatorId: string, postId: string, rated: boolean): Promise<void>
{
    if (rated === false)
    {
        return;
    }

    const post = await getPost(tenantId, postId);

    return create(Types.RATED_POST, creatorId, post.creatorId, postId);
}
