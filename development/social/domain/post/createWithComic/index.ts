
import { type Requester } from '@comify/common/security';
import createComic from '~/comic/create';

import createPost from '../_create';

type Data = {
    readonly comicImageDataUrl: string;
    readonly parentId?: string;
};

export default async function run(requester: Requester, data: Data): Promise<string>
{
    const comicId = await createComic(data.comicImageDataUrl);

    return createPost(requester.tenantId, requester.principalId, comicId, undefined, data.parentId);
}
