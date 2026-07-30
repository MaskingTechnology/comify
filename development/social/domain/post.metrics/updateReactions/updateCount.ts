
import type { Record, CountOperation } from '../definitions';

export default function (record: Record, operation: CountOperation): number
{
    return operation === 'increase'
        ? record.reactions + 1
        : record.reactions - 1;
}
