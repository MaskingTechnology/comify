
import { type Identifier } from '@comify/common/primitives/identifier';

import toModel from '../_toModel';
import { type Metrics, type Record } from '../definitions';

export default async function (records: Record[]): Promise<Map<Identifier, Metrics>>
{
    const models = await Promise.all(records.map(toModel));

    const map = new Map();

    records.forEach((record, index) =>
    {
        map.set(record.postId, models[index]);
    });

    return map;
}
