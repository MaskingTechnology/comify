
import type Requester from '../authentication/Requester';
import createActualComment from '../comment/create';
import eraseActualComment from '../comment/erase';
import increaseReactionCount from '../post/increaseReactionCount';
import createData from './data/createData';
import eraseReaction from './repository/erase';
import insert from './repository/insert';
import type ReactionView from './view/ReactionView';
import createView from './view/createView';

export default async function createComment(requester: Requester, postId: string, message: string): Promise<ReactionView>
{
    let comment, reactionId;

    try
    {
        comment = await createActualComment(message);

        const data = createData(requester.id, postId, undefined, comment.id);

        reactionId = await insert(data);

        await increaseReactionCount(postId);

        return createView(requester, data);
    }
    catch (error: unknown)
    {
        const undoComment = comment !== undefined ? eraseActualComment(comment.id) : Promise.resolve();
        const undoReaction = reactionId !== undefined ? eraseReaction(reactionId) : Promise.resolve();

        await Promise.all([undoComment, undoReaction]);

        throw error;
    }
}
