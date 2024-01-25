
import retrieveComicView from '../comic/retrieveView';
import retrieveRelationView from '../relation/retrieveView';

import ratingExists from '../rating/exists';

import type PostData from './PostData';
import PostView from './PostView';

export default async function createView(data: PostData): Promise<PostView>
{
    const [creatorView, comicView, hasRated] = await Promise.all([
        retrieveRelationView('0', data.creatorId),
        retrieveComicView(data.comicId),
        ratingExists(data.creatorId, data.id, undefined),
    ]);

    return new PostView(data.id, data.createdAt, creatorView, comicView, data.ratingCount, data.reactionCount, hasRated);
}
