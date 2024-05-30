
import type Requester from '../authentication/Requester';
import createActualComic from '../comic/create';
import eraseActualComic from '../comic/erase';
import increaseReactionCount from '../post/increaseReactionCount';
import createReaction from './data/create';
import eraseReaction from './data/erase';
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
        const undoComment = comic !== undefined ? eraseActualComic(comic.id) : Promise.resolve();
        const undoReaction = reaction !== undefined ? eraseReaction(reaction.id) : Promise.resolve();

        await Promise.all([undoComment, undoReaction]);

        throw error;
    }
}
