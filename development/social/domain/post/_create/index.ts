
import type { Identifier } from '@comify/common/primitives/identifier';
import { type Requester } from '@comify/common/security';

import { logger } from '../integrations';

import { type CreateData } from './definitions';
import createRecord from './createRecord';
import persist from './persist';
import publish from './publish';
import validate from './validate';
import remove from './remove';

export default async function (requester: Requester, data: CreateData): Promise<Identifier>
{
    validate(data);

    const record = createRecord(requester.tenantId, data.creatorId, data.comicId, data.commentId, data.parentId);

    const postId = await persist(record);

    try
    {
        await publish(requester.tenantId, requester.principalId, record.id, record.parentId);

        return postId;
    }
    catch (error)
    {
        logger.error('Failed to create post', error);

        await remove(postId);

        throw error;
    }
}
