
import createActualComic from '^/domain/comic/create/feature';
import eraseActualComic from '^/domain/comic/erase/feature';

import type Requester from '../authentication/Requester';
import updateReactionCount from '../post/updateReactionCount/feature';
import createReaction from './data/create';
import eraseReaction from './data/erase';
import type ReactionView from './view/ReactionView';
import createView from './view/createView';

export default async function createComic(requester: Requester, postId: string, imageData: string): Promise<ReactionView>
{
    let comicId, reaction;

    try
    {
        comicId = await createActualComic(imageData);
        reaction = await createReaction(requester.id, postId, comicId);
        await updateReactionCount(postId, 'increase');

        return createView(requester, reaction);
    }
    catch (error: unknown)
    {
        const undoComment = comicId !== undefined ? eraseActualComic(comicId) : Promise.resolve();
        const undoReaction = reaction !== undefined ? eraseReaction(reaction.id) : Promise.resolve();

        await Promise.all([undoComment, undoReaction]);

        throw error;
    }
}
