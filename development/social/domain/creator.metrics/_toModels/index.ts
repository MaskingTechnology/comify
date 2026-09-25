
import { type Identifier } from '@comify/common/primitives/identifier';

import toModel from '../_toModel';
import { type Metrics, type Record } from '../definitions';

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
