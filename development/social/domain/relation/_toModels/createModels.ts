
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Creator } from '~/creator';

import { type Relation, type Record, type RelationId } from '../definitions';
import { logger } from '../integrations';

export default function (records: Record[], creators: Map<Identifier, Creator>): Map<RelationId, Relation>
{
    const map = new Map();

    records.forEach(record =>
    {
        const creator = creators.get(record.followingId);

        if (creator === undefined) return logger.warn(`Following creator for relation with id ${record.id} not found`);

        const id = `${record.followerId}:${record.followingId}`;

        map.set(id, {
            following: creator,
            established: record.id !== undefined,
            self: record.followerId === record.followingId
        });
    });

    return map;
}
