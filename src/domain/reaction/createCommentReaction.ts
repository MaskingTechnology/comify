
import Requester from '../authentication/Requester';
import createComment from '../comment/create';
import removeComment from '../comment/remove';
import increaseReactionCount from '../post/increaseReactionCount';
import createReaction from './data/create';
import removeReaction from './data/remove';
import type ReactionView from './view/ReactionView';
import createView from './view/createView';

export default async function createCommentReaction(requester: Requester, postId: string, message: string): Promise<ReactionView>
{
    let comment, reaction;

    try
    {
        comment = await createComment(message);
        reaction = await createReaction(requester.id, postId, undefined, comment.id);
        await increaseReactionCount(postId);

        return createView(requester, reaction);
    }
    catch (error: unknown)
    {
        const undoComment = comment !== undefined ? removeComment(comment.id) : Promise.resolve();
        const undoReaction = reaction !== undefined ? removeReaction(reaction.id) : Promise.resolve();

        await Promise.all([undoComment, undoReaction]);

        throw error;
    }
}
