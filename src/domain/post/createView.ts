
import retrieveComicView from '../comic/retrieveView';
import getRelationView from '../relation/getView';

import type PostData from './PostData';
import PostView from './PostView';

export default async function createView(data: PostData): Promise<PostView>
{
    const [relationView, comicView] = await Promise.all([
        getRelationView('0', data.creatorId),
        retrieveComicView(data.comicId)
    ]);

    return new PostView(data.id, data.createdAt, relationView, comicView, data.ratingCount, data.reactionCount);
}
