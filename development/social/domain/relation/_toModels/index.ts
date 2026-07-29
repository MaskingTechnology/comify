
import getCreators from '~/creator/getManyById';

import type { Record, Relation } from '../definitions';
import { logger } from '../integrations';

export default async function (tenantId: string, records: Record[]): Promise<Map<string, Relation>>
{
    const map = new Map();

    if (records.length === 0) return map;

    const followingIds = new Set(records.map(record => record.followingId));

    const creators = await getCreators(tenantId, [...followingIds]);

    records.forEach(record =>
    {
        const creator = creators.get(record.followingId);

        if (creator === undefined) return logger.warn(`Following creator for relation with id ${record.id} not found`);

        const key = `${record.followerId}:${record.followingId}`;

        map.set(key, {
            following: creator,
            established: record.id !== undefined,
            self: record.followerId === record.followingId
        });
    });

    return map;
}
