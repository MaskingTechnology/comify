
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import createComic from '~/comic/create';

import createPost from '../_create';

export default async function run(tenant: Tenant, requester: Requester, comicImageDataUrl: string, parentId: string | undefined = undefined): Promise<string>
{
    const comicId = await createComic(comicImageDataUrl);

    return createPost(tenant.id, requester.id, comicId, undefined, parentId);
}
