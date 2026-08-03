
import type { RatingKey, Record } from '../definitions';

export default function (keys: RatingKey[], records: Record[]): Map<string, boolean>
{
    const map = new Map();

    keys.forEach(({ creatorId, postId }) =>
    {
        const record = records.find(record => record.creatorId === creatorId && record.postId === postId);

        const id = `${creatorId}:${postId}`;
        const exists = record !== undefined;

        map.set(id, exists);
    });

    return map;
}
