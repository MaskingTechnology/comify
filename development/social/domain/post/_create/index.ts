
import logger from '@comify/common/integrations/logging';

import erase from '../_erase';

import createRecord from './createRecord';
import persist from './persist';
import publish from './publish';
import validate from './validate';

export default async function run(tenantId: string, creatorId: string, comicId?: string, commentId?: string, parentId?: string): Promise<string>
{
    let postId;

    try
    {
        const record = createRecord(tenantId, creatorId, comicId, commentId, parentId);

        validate(record);

        postId = await persist(record);

        await publish(tenantId, creatorId, postId, parentId);

        return postId;
    }
    catch (error)
    {
        logger.error('Failed to create post', error);

        if (postId !== undefined)
        {
            await erase(postId);
        }

        throw error;
    }
}

export { default as subscribe } from './subscribe';
