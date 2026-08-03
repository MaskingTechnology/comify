
import { type Identifier } from '@comify/common/primitives/identifier';

import translate from '../_translateMany';
import type { Record } from '../definitions';

import retrieve from './retrieve';

export default async function (followerId: Identifier, limit: number | undefined = undefined, offset: number | undefined = undefined): Promise<Record[]>
{
    const records = await retrieve(followerId, limit, offset);

    return translate(followerId, 'following', records);
}
