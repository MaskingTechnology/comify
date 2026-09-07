
import { type CountOperation } from '@comify/common/primitives/count';

import { type Record } from '../definitions';

export default function (record: Record, operation: CountOperation): number
{
    return operation === 'increase'
        ? record.followers + 1
        : record.followers - 1;
}
