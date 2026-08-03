
import type { Identifier } from '@comify/common/primitives/identifier';
import { type Requester } from '@comify/common/security';

import { type RatingKey } from '../definitions';

import retrieve from './retrieve';
import switchOff from './switchOff';
import switchOn from './switchOn';

export default async function (requester: Requester, postId: Identifier): Promise<boolean>
{
    const key: RatingKey = { creatorId: requester.principalId, postId };

    const record = await retrieve(key.creatorId, key.postId);

    if (record === undefined)
    {
        await switchOn(requester, key);

        return true;
    }

    await switchOff(requester, key);

    return false;
}

export { default as InvalidRating } from './create';
