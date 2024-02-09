
import getComicView from '../../comic/get';
import ratingExists from '../../rating/exists';
import getRelationView from '../../relation/get';
import type PostData from '../data/PostData';
import PostView from './PostView';

export default async function createView(data: PostData): Promise<PostView>
{
    const [creatorView, comicView, hasRated] = await Promise.all([
        getRelationView('0', data.creatorId),
        getComicView(data.comicId),
        ratingExists(data.creatorId, data.id, undefined),
    ]);

    return new PostView(data.id, data.createdAt, creatorView, comicView, data.ratingCount, data.reactionCount, hasRated);
}
