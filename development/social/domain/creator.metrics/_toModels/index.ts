
import type { Identifier } from '@comify/common/primitives/identifier';

import type { Metrics, Record } from '../definitions';

import toModel from '../_toModel';

export default function (records: Record[]): Map<Identifier, Metrics>
{
    const models = records.map(toModel);

    const map = new Map();

    records.forEach((record, index) =>
    {
        map.set(record.creatorId, models[index]);
    });

    return map;
}
