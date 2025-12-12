
import getPost from '~/post/getById';

import create from '../create';
import { Types } from '../definitions';

export default async function createdPost(tenantId: string, creatorId: string, postId: string, parentId?: string): Promise<void>
{
    if (parentId === undefined)
    {
        return;
    }

    const parentPost = await getPost(tenantId, parentId);

    return create(Types.REACTED_TO_POST, creatorId, parentPost.creatorId, postId);
}
