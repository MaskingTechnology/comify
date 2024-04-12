
import Requester from '../authentication/Requester';
import createComment from '../comment/create';
import removeComment from '../comment/remove';
import createReaction from './data/create';

export default async function create(requester: Requester, postId: string, message: string): Promise<void>
{
    let comment;

    try
    {
        comment = await createComment(message);

        await createReaction(requester.id, postId, undefined, comment.id);
    }
    catch (error: unknown)
    {
        const undoComment = comment !== undefined ? removeComment(comment.id) : Promise.resolve();

        await Promise.all([undoComment]);

        throw error;
    }
}
