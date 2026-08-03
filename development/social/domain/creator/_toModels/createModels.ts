
import type { Identifier } from '@comify/common/primitives/identifier';

import { type Record, type Creator } from '../definitions';
import { logger } from '../integrations';

import { type References } from './definitions';

export default function (records: Record[], references: References): Map<Identifier, Creator>
{
    const { portraitMap, metricsMap } = references;

    const map = new Map();

    records.forEach(record =>
    {
        const { id, fullName, nickname } = record;

        const joinedAt = new Date(record.joinedAt);
        const portraitId = record.portraitId ?? '';

        const portrait = portraitMap.get(portraitId);
        const metrics = metricsMap.get(id);

        if (metrics === undefined) return logger.warn(`Metrics for creator with id ${record.id} not found`);

        const creator: Creator = { id, fullName, nickname, portrait, joinedAt, metrics };

        map.set(record.id, creator);
    });

    return map;
}
