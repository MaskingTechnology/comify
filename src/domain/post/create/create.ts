
import logger from '^/integrations/logging';

import getById from '../getById';

import createData from './createData';
import insertData from './insertData';
import publish from './publish';
import validateData from './validateData';

export default async function create(creatorId: string, comicId?: string, commentId?: string, parentId?: string): Promise<string>
{
    try
    {
        const parent = parentId ? await getById(parentId) : undefined;

        const data = createData(creatorId, comicId, commentId, parentId);

        validateData(data);

        const postId = await insertData(data);

        publish(creatorId, postId, parent?.id, parent?.creatorId);

        return postId;
    }
    catch (error: unknown)
    {
        logger.logError('Failed to create post', error);

        throw error;
    }
}
