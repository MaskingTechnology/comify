
import logger from '^/integrations/logging/module';

import updateReactionCount from '^/domain/post/updateReactionCount/feature';

import createData from './createData';
import eraseData from './eraseData';
import insertData from './insertData';

export default async function feature(creatorId: string, postId: string, comicId: string | undefined = undefined, commentId: string | undefined = undefined): Promise<string>
{
    let id;

    try
    {
        const data = createData(creatorId, postId, comicId, commentId);

        id = await insertData(data);

        await updateReactionCount(postId, 'increase');

        return id;
    }
    catch (error: unknown)
    {
        logger.logError('Failed to create reaction', error);

        if (id !== undefined)
        {
            await eraseData(id);
        }

        throw error;
    }
}
