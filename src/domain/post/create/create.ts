
import logger from '^/integrations/logging';

import erase from '../erase';
import createData from './createData';
import insertData from './insertData';
import publish from './publish';
import validateData from './validateData';

export default async function create(creatorId: string, comicId?: string, commentId?: string, parentId?: string): Promise<string>
{
    let postId;

    try
    {
        const data = createData(creatorId, comicId, commentId, parentId);

        validateData(data);

        postId = await insertData(data);

        await publish(creatorId, postId, parentId);

        return postId;
    }
    catch (error)
    {
        logger.logError('Failed to create post', error);

        if (postId !== undefined)
        {
            await erase(postId);
        }

        throw error;
    }
}
