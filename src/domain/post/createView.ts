
import retrieveComicData from '../comic/retrieveData';
import createComicView from '../comic/createView';

import getRelationData from '../relation/getData';
import createRelationView from '../relation/createView';

import type PostData from './PostData';
import PostView from './PostView';

export default async function createView(data: PostData): Promise<PostView>
{
    const [relationData, comicData] = await Promise.all([
        getRelationData('0', data.creatorId),
        retrieveComicData(data.comicId)
    ]);

    const [relationView, comicView] = await Promise.all([
        createRelationView(relationData),
        createComicView(comicData)
    ]);

    return new PostView(data.id, data.createdAt, relationView, comicView, data.ratingCount, data.reactionCount);
}
