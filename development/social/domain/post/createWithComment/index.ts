
import { type Requester } from '@comify/common/security';
import createComment from '~/post.comment/create';

import createPost from '../_create';

type Data = {
    readonly message: string;
    readonly parentId?: string;
};

export default async function (requester: Requester, data: Data): Promise<string>
{
    const commentId = await createComment({ message: data.message });

    return createPost({
        tenantId: requester.tenantId,
        creatorId: requester.principalId,
        commentId,
        parentId: data.parentId
    });
}
