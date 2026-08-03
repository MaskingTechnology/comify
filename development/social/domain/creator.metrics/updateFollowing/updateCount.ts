
import type { CountOperation } from '@comify/common/primitives/count';

import type { Record } from '../definitions';

export default function (record: Record, operation: CountOperation): number
{
    return operation === 'increase'
        ? record.following + 1
        : record.following - 1;
}
