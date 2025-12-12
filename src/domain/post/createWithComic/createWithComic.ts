
import type { Requester } from '~/authentication';
import createComic from '~/comic/create';
import type { Tenant } from '~/tenant';

import createPost from '../create';

export default async function createWithComic(tenant: Tenant, requester: Requester, comicImageDataUrl: string, parentId: string | undefined = undefined): Promise<string>
{
    const comicId = await createComic(comicImageDataUrl);

    return createPost(tenant.id, requester.id, comicId, undefined, parentId);
}
