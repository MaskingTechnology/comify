
import type { Metrics, Record } from '../definitions';
import toModel from '../_toModel';

export default async function run(records: Record[]): Promise<Map<string, Metrics>>
{
    const models = await Promise.all(records.map(toModel));

    const map = new Map();

    records.forEach((record, index) =>
    {
        map.set(record.postId, models[index]);
    });

    return map;
}
