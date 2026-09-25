
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Record } from '../definitions';

export default function (creatorId: Identifier): Record
{
    return { id: '', creatorId, posts: 0, followers: 0, following: 0, popularity: 0 };
}
