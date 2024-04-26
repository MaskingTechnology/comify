
import Requester from '../authentication/Requester';
import createComic from '../comic/create';
import removeComic from '../comic/remove';
import increaseReactionCount from '../post/increaseReactionCount';
import createReaction from './data/create';
import removeReaction from './data/remove';

export default async function createComicReaction(requester: Requester, postId: string, imageData: string): Promise<void>
{
    let comic, reaction;

    try
    {
        comic = await createComic(imageData);
        reaction = await createReaction(requester.id, postId, comic.id, undefined);
        await increaseReactionCount(postId);
    }
    catch (error: unknown)
    {
        const undoComment = comic !== undefined ? removeComic(comic.id) : Promise.resolve();
        const undoReaction = reaction !== undefined ? removeReaction(reaction.id) : Promise.resolve();

        await Promise.all([undoComment, undoReaction]);

        throw error;
    }
}
