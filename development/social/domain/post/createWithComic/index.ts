
import { type Requester } from '@comify/common/security';
import createComic from '~/post.comic/create';

import createPost from '../_create';

type Data = {
    readonly comicImageDataUrl: string;
    readonly parentId?: string;
};

export default async function run(requester: Requester, data: Data): Promise<string>
{
    const comicId = await createComic({ imageDataUrl: data.comicImageDataUrl });

    return createPost({
        tenantId: requester.tenantId,
        creatorId: requester.principalId,
        comicId,
        parentId: data.parentId
    });
}
