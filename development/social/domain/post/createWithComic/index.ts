
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import createComic from '~/comic/create';

import createPost from '../_create';

type Record = {
    readonly comicImageDataUrl: string;
    readonly parentId?: string;
}

export default async function run(tenant: Tenant, requester: Requester, record: Record): Promise<string>
{
    const comicId = await createComic(record.comicImageDataUrl);

    return createPost(tenant.id, requester.id, comicId, undefined, record.parentId);
}
