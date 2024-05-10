
import type Requester from '../authentication/Requester';
import createActualComic from '../comic/create';
import removeActualComic from '../comic/remove';
import increaseReactionCount from '../post/increaseReactionCount';
import createReaction from './data/create';
import removeReaction from './data/remove';
import type ReactionView from './view/ReactionView';
import createView from './view/createView';

export default async function createComic(requester: Requester, postId: string, imageData: string): Promise<ReactionView>
{
    let comic, reaction;

    try
    {
        comic = await createActualComic(imageData);
        reaction = await createReaction(requester.id, postId, comic.id);
        await increaseReactionCount(postId);

        return createView(requester, reaction);
    }
    catch (error: unknown)
    {
        const undoComment = comic !== undefined ? removeActualComic(comic.id) : Promise.resolve();
        const undoReaction = reaction !== undefined ? removeReaction(reaction.id) : Promise.resolve();

        await Promise.all([undoComment, undoReaction]);

        throw error;
    }
}
