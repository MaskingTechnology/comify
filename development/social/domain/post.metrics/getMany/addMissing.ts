
import { type Record } from '../definitions';

import createMissing from './createMissing';

export default function (postIds: string[], records: Record[]): Record[]
{
    const result: Record[] = [];

    postIds.forEach(postId =>
    {
        const record = records.find(record => record.postId === postId)
            ?? createMissing(postId);

        result.push(record);
    });

    return result;
}
