
import logger from '^/integrations/logging';

import createData from './createData';
import insertData from './insertData';
import publish from './publish';
import validateData from './validateData';

export default async function create(creatorId: string, comicId?: string, commentId?: string, parentId?: string): Promise<string>
{
    try
    {
        const data = createData(creatorId, comicId, commentId, parentId);

        validateData(data);

        const postId = await insertData(data);

        publish(creatorId, postId, parentId);

        return postId;
    }
    catch (error: unknown)
    {
        logger.logError('Failed to create post', error);

        throw error;
    }
}
