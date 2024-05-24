
import type Requester from '../authentication/Requester';
import createActualComment from '../comment/create';
import eraseActualComment from '../comment/erase';
import updateReactionCount from '../post/updateReactionCount/feature';
import createReaction from './data/create';
import eraseReaction from './data/erase';
import type ReactionView from './view/ReactionView';
import createView from './view/createView';

export default async function createComment(requester: Requester, postId: string, message: string): Promise<ReactionView>
{
    let comment, reaction;

    try
    {
        comment = await createActualComment(message);
        reaction = await createReaction(requester.id, postId, undefined, comment.id);
        await updateReactionCount(postId, 'increase');

        return createView(requester, reaction);
    }
    catch (error: unknown)
    {
        const undoComment = comment !== undefined ? eraseActualComment(comment.id) : Promise.resolve();
        const undoReaction = reaction !== undefined ? eraseReaction(reaction.id) : Promise.resolve();

        await Promise.all([undoComment, undoReaction]);

        throw error;
    }
}
