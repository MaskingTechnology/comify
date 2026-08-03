
import type { Identifier } from '@comify/common/primitives/identifier';

import type { Record, Comment } from '../definitions';

import toModel from '../_toModel';

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
