
import getPost from '~/post/getById';

import create from '../_create';
import { Types } from '../definitions';

export default async function run(tenantId: string, creatorId: string, postId: string, rated: boolean): Promise<void>
{
    if (rated === false)
    {
        return;
    }

    const post = await getPost(tenantId, postId);

    return create(Types.RATED_POST, creatorId, post.creatorId, postId);
}
