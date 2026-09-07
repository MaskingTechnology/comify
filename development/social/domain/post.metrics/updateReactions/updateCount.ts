
import { type CountOperation } from '@comify/common/primitives/count';

import { type Record } from '../definitions';

export default function (record: Record, operation: CountOperation): number
{
    return operation === 'increase'
        ? record.reactions + 1
        : record.reactions - 1;
}
