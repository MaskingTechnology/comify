
import retrieveComic from '../comic/retrieve';
import createComicView from '../comic/createView';

import retrieveCreator from '../creator/retrieve';
import createCreatorView from '../creator/createView';

import PostView from './PostView';
import PostData from './PostData';

export default async function createView(data: PostData): Promise<PostView>
{
    const [creator, comic] = await Promise.all([
        retrieveCreator(data.creatorId),
        retrieveComic(data.comicId)
    ]);

    const [creatorView, comicView] = await Promise.all([
        createCreatorView(creator),
        createComicView(comic)
    ]);

    return new PostView(data.id, data.createdAt, creatorView, comicView, data.ratingCount, data.reactionCount);
}
