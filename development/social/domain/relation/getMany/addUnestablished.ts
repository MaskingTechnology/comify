
import { type RelationKey, type Record } from '../definitions';

import createUnestablished from './createUnestablished';

export default function (keys: RelationKey[], records: Record[]): Record[]
{
    const result: Record[] = [];

    keys.forEach(({ followerId, followingId }) =>
    {
        const record = records.find(record => record.followerId === followerId && record.followingId === followingId)
            ?? createUnestablished(followerId, followingId);

        result.push(record);
    });

    return result;
}
