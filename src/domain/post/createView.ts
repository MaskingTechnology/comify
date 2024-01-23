
import retrieveComicData from '../comic/retrieveData';
import createComicView from '../comic/createView';

import retrieveCreatorData from '../creator/retrieveData';
import createCreatorView from '../creator/createView';

import PostView from './PostView';
import PostData from './PostData';

export default async function createView(data: PostData): Promise<PostView>
{
    const [creatorData, comicData] = await Promise.all([
        retrieveCreatorData(data.creatorId),
        retrieveComicData(data.comicId)
    ]);

    const [creatorView, comicView] = await Promise.all([
        createCreatorView(creatorData),
        createComicView(comicData)
    ]);

    return new PostView(data.id, data.createdAt, creatorView, comicView, data.ratingCount, data.reactionCount);
}
