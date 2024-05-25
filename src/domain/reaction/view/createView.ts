
import type Requester from '../../authentication/Requester';
import getComicView from '../../comic/get/feature';
import getCommentView from '../../comment/get/feature';
import ratingExists from '../../rating/exists/feature';
import getRelationView from '../../relation/get';
import type ReactionData from '../data/ReactionData';
import ReactionView from './ReactionView';

export default async function createView(requester: Requester, data: ReactionData): Promise<ReactionView>
{
    const [relationView, hasRated, comicView, commentView] = await Promise.all([
        getRelationView(requester.id, data.creatorId),
        ratingExists(requester.id, undefined, data.id),
        data.comicId ? getComicView(data.comicId) : Promise.resolve(undefined),
        data.commentId ? getCommentView(data.commentId) : Promise.resolve(undefined),
    ]);

    return new ReactionView(data.id, data.createdAt, relationView, data.ratingCount, hasRated, comicView, commentView);
}
