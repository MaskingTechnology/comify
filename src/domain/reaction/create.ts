
import Requester from '../authentication/Requester';
import createComment from '../comment/create';
import removeComment from '../comment/remove';
import decreaseReactionCount from '../post/decreaseReactionCount';
import increaseReactionCount from '../post/increaseReactionCount';
import createReaction from './data/create';

export default async function create(requester: Requester, postId: string, message: string): Promise<void>
{
    let comment, post;

    try
    {
        comment = await createComment(message);
        post = await increaseReactionCount(postId);
        await createReaction(requester.id, postId, undefined, comment.id);
    }
    catch (error: unknown)
    {
        const undoComment = comment !== undefined ? removeComment(comment.id) : Promise.resolve();
        const undoPost = post !== undefined ? decreaseReactionCount(postId) : Promise.resolve();

        await Promise.all([undoComment, undoPost]);

        throw error;
    }
}
