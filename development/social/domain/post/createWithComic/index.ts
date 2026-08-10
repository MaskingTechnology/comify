
import type { Identifier } from '@comify/common/primitives/identifier';
import { type Requester } from '@comify/common/security';

import createComic from '~/post.comic/create';

import createPost from '../_create';

import type { CreateData } from './definitions';

export default async function (requester: Requester, data: CreateData): Promise<Identifier>
{
    const comicId = await createComic({ imageDataUrl: data.imageDataUrl });

    return createPost(requester, {
        creatorId: requester.principalId,
        comicId,
        parentId: data.parentId
    });
}
