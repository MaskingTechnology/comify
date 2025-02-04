
import { Types } from '../definitions';

import getPost from '^/domain/post/getById';

import create from '../create';

export default async function createdPost(creatorId: string, postId: string, parentId?: string): Promise<void>
{
    if (parentId === undefined)
    {
        return;
    }

    const parentPost = await getPost(parentId);

    return create(Types.REACTED_TO_POST, creatorId, parentPost.creatorId, postId);
}
