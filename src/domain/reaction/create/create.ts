
import logger from '^/integrations/logging';

import retrievePost from '^/domain/post/getById';

import retrieveReaction from '../getById';

import createData from './createData';
import eraseData from './eraseData';
import insertData from './insertData';
import publish from './publish';
import validateData from './validateData';

export default async function feature(creatorId: string, postId: string | undefined = undefined, reactionId: string | undefined = undefined, comicId: string | undefined = undefined, commentId: string | undefined = undefined): Promise<string>
{
    let id;

    try
    {
        const data = createData(creatorId, postId, reactionId, comicId, commentId);

        validateData(data);

        id = await insertData(data);

        if (postId !== undefined)
        {
            const post = await retrievePost(postId);

            publish(creatorId, id, post.creatorId, post.id);
        }

        if (reactionId !== undefined)
        {
            const reaction = await retrieveReaction(reactionId);

            publish(creatorId, id, reaction.creatorId, undefined, reaction.id);
        }

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
