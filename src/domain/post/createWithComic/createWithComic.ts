
import type { Requester } from '^/domain/authentication';
import createComic from '^/domain/comic/create';
import type { Tenant } from '^/domain/tenant';

import createPost from '../create';

export default async function createWithComic(requester: Requester, tenant: Tenant, comicImageDataUrl: string, parentId: string | undefined = undefined): Promise<string>
{
    const comicId = await createComic(comicImageDataUrl);

    return createPost(requester.id, comicId, undefined, parentId, tenant.id);
}
