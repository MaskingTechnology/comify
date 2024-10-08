
import logger from '^/integrations/logging/module';

import updateReactionCount from '^/domain/post/updateReactionCount/feature';

import createNotification from '^/domain/notification/create/feature';
import { Types } from '^/domain/notification/definitions';
import retrievePost from '^/domain/post/getById/feature';
import createData from './createData';
import eraseData from './eraseData';
import insertData from './insertData';
import validateData from './validateData';

export default async function feature(creatorId: string, postId: string, comicId: string | undefined = undefined, commentId: string | undefined = undefined): Promise<string>
{
    let id;

    try
    {
        const data = createData(creatorId, postId, comicId, commentId);

        validateData(data);

        id = await insertData(data);

        await updateReactionCount(postId, 'increase');

        const post = await retrievePost(postId);

        await createNotification(Types.ADDED_REACTION, creatorId, post.creatorId, postId, id);

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
