
import type Requester from '../authentication/Requester';
import createActualComic from '../comic/create';
import eraseActualComic from '../comic/erase';
import increaseReactionCount from '../post/increaseReactionCount';
import createData from './data/createData';
import eraseReaction from './repository/erase';
import insert from './repository/insert';
import type ReactionView from './view/ReactionView';
import createView from './view/createView';

export default async function createComic(requester: Requester, postId: string, imageData: string): Promise<ReactionView>
{
    let comic, reactionId;

    try
    {
        comic = await createActualComic(imageData);

        const data = createData(requester.id, postId, comic.id);

        reactionId = await insert(data);

        await increaseReactionCount(postId);

        return createView(requester, data);
    }
    catch (error: unknown)
    {
        const undoComment = comic !== undefined ? eraseActualComic(comic.id) : Promise.resolve();
        const undoReaction = reactionId !== undefined ? eraseReaction(reactionId) : Promise.resolve();

        await Promise.all([undoComment, undoReaction]);

        throw error;
    }
}
