
import type { Record, CountOperation } from '../definitions';

export default function (record: Record, operation: CountOperation): number
{
    return operation === 'increase'
        ? record.posts + 1
        : record.posts - 1;
}
