
import { type Record } from '../definitions';

import createMissing from './createMissing';

export default function (creatorIds: string[], records: Record[]): Record[]
{
    const result: Record[] = [];

    creatorIds.forEach(creatorId =>
    {
        const record = records.find(record => record.creatorId === creatorId)
            ?? createMissing(creatorId);

        result.push(record);
    });

    return result;
}
