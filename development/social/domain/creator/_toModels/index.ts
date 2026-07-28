
import { type Record, type Creator } from '../definitions';
import { logger } from '../integrations';

import getPortraits from '~/image/getManyById';
import getMetrics from '~/creator.metrics/getMany';

export default async function run(records: Record[]): Promise<Map<string, Creator>>
{
    const portraitIds = new Set(records.map(record => record.portraitId).filter(id => id !== undefined));
    const creatorIds = new Set(records.map(record => record.id));

    const [portraitMap, metricsMap] = await Promise.all([
        getPortraits([...portraitIds]),
        getMetrics([...creatorIds])
    ]);

    const map = new Map();

    records.forEach(record =>
    {
        const portrait = record.portraitId !== undefined ? portraitMap.get(record.portraitId) : undefined;
        const metrics = metricsMap.get(record.id);

        if (metrics === undefined) return logger.warn(`Metrics for creator with id ${record.id} not found`);

        const model = {
            id: record.id,
            fullName: record.fullName,
            nickname: record.nickname,
            joinedAt: record.joinedAt,
            portrait,
            metrics
        };

        map.set(record.id, model);
    });

    return map;
}
