
import type { Metrics, Data } from '../definitions';

export default async function run(data: Data): Promise<Metrics>
{
    const {id: $0, creatorId: $1, ...metrics} = data;

    return metrics;
}
