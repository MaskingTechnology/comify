
import { type Requester } from '@comify/common/security';
import createComment from '~/comment/create';

import createPost from '../_create';

type Data = {
    readonly message: string;
    readonly parentId?: string;
};

export default async function run(requester: Requester, data: Data): Promise<string>
{
    const commentId = await createComment(data.message);

    return createPost(requester.tenantId, requester.principalId, undefined, commentId, data.parentId);
}
