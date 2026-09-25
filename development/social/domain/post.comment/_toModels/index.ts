
import { type Identifier } from '@comify/common/primitives/identifier';

import toModel from '../_toModel';
import { type Record, type Comment } from '../definitions';

export default async function (records: Record[]): Promise<Map<Identifier, Comment>>
{
    const models = await Promise.all(records.map(toModel));

    const map = new Map();

    records.forEach((record, index) =>
    {
        map.set(record.id, models[index]);
    });

    return map;
}
