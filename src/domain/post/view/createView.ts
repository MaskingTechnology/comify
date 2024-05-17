
import type Requester from '^/domain/authentication/Requester';
import getComicView from '^/domain/comic/get';
import ratingExists from '^/domain/rating/exists';
import getRelationView from '^/domain/relation/get';

import type PostData from '../data/PostData';
import PostView from './PostView';

export default async function createView(requester: Requester, data: PostData): Promise<PostView>
{
    const [creatorView, comicView, hasRated] = await Promise.all([
        getRelationView(requester.id, data.creatorId),
        getComicView(data.comicId),
        ratingExists(requester.id, data.id, undefined),
    ]);

    return new PostView(data.id, data.createdAt, creatorView, comicView, data.ratingCount, data.reactionCount, hasRated);
}
