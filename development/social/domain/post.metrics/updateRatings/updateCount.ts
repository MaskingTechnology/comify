
import type { Record, CountOperation } from '../definitions';

export default function (record: Record, operation: CountOperation): number
{
    return operation === 'increase'
        ? record.ratings + 1
        : record.ratings - 1;
}
