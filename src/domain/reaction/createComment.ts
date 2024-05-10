
import type Requester from '../authentication/Requester';
import createActualComment from '../comment/create';
import removeActualComment from '../comment/remove';
import increaseReactionCount from '../post/increaseReactionCount';
import createReaction from './data/create';
import removeReaction from './data/remove';
import type ReactionView from './view/ReactionView';
import createView from './view/createView';

export default async function createComment(requester: Requester, postId: string, message: string): Promise<ReactionView>
{
    let comment, reaction;

    try
    {
        comment = await createActualComment(message);
        reaction = await createReaction(requester.id, postId, undefined, comment.id);
        await increaseReactionCount(postId);

        return createView(requester, reaction);
    }
    catch (error: unknown)
    {
        const undoComment = comment !== undefined ? removeActualComment(comment.id) : Promise.resolve();
        const undoReaction = reaction !== undefined ? removeReaction(reaction.id) : Promise.resolve();

        await Promise.all([undoComment, undoReaction]);

        throw error;
    }
}
