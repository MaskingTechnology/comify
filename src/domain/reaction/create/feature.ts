
import logger from '^/integrations/logging/module';

import updatePostReactionCount from '^/domain/post/updateReactionCount/feature';
import updateReactionReactionCount from '../updateReactionCount/feature';

import createNotification from '^/domain/notification/create/feature';
import { Types } from '^/domain/notification/definitions';
import retrievePost from '^/domain/post/getById/feature';
import retrieveReaction from '../getById/feature';
import createData from './createData';
import eraseData from './eraseData';
import insertData from './insertData';
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
            await updatePostReactionCount(postId, 'increase');

            const post = await retrievePost(postId);

            await createNotification(Types.ADDED_REACTION_POST, creatorId, post.creatorId, postId, undefined, id);
        }

        if (reactionId !== undefined)
        {
            await updateReactionReactionCount(reactionId, 'increase');

            const reaction = await retrieveReaction(reactionId);

            await createNotification(Types.ADDED_REACTION_REACTION, creatorId, reaction.creatorId, undefined, reactionId, id);
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
