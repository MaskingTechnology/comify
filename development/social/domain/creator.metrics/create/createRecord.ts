
import type { Identifier } from '@comify/common/primitives/identifier';
import generateId from '@comify/common/primitives/identifier/generate';

import type { Record } from '../definitions';

export default function (creatorId: Identifier): Record
{
    return {
        id: generateId(),
        creatorId,
        posts: 0,
        followers: 0,
        following: 0,
        popularity: 0
    };
}
