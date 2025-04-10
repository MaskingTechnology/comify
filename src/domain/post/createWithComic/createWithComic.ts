
import type { Requester } from '^/domain/authentication';

import createComic from '^/domain/comic/create';

import createPost from '../create';

export default async function createWithComic(requester: Requester, comicImageDataUrl: string, parentId: string | undefined = undefined): Promise<string>
{
    const comicId = await createComic(comicImageDataUrl);

    return createPost(requester.id, comicId, undefined, parentId, requester.tenantId);
}
