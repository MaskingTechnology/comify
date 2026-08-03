
import type { Identifier } from '@comify/common/primitives/identifier';
import { type Requester } from '@comify/common/security';

import createComment from '~/post.comment/create';

import createPost from '../_create';

import type { CreateData } from './definitions';

export default async function (requester: Requester, data: CreateData): Promise<Identifier>
{
    const commentId = await createComment({ message: data.message });

    return createPost({
        tenantId: requester.tenantId,
        creatorId: requester.principalId,
        commentId,
        parentId: data.parentId
    });
}
