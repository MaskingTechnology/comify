
import type { Metrics, Record } from '../definitions';

export default async function run(record: Record): Promise<Metrics>
{
    const {id: $0, creatorId: $1, ...metrics} = record;

    return metrics;
}
