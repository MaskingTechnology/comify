
import type Requester from '../../authentication/Requester';
import getComicView from '../../comic/get';
import getCommentView from '../../comment/get';
import getCreatorView from '../../creator/get';
import ratingExists from '../../rating/exists';
import type ReactionData from '../data/ReactionData';
import ReactionView from './ReactionView';

export default async function createView(requester: Requester, data: ReactionData): Promise<ReactionView>
{
    const [creatorView, hasRated, comicView, commentView] = await Promise.all([
        getCreatorView(data.creatorId),
        ratingExists(requester.id, undefined, data.id),
        data.comicId ? getComicView(data.comicId) : Promise.resolve(undefined),
        data.commentId ? getCommentView(data.commentId) : Promise.resolve(undefined),
    ]);

    return new ReactionView(data.id, data.createdAt, creatorView, data.ratingCount, hasRated, comicView, commentView);
}
