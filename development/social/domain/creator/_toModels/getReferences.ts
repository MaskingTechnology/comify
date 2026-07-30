
import getPortraits from '~/image/getManyById';
import getMetrics from '~/creator.metrics/getMany';

import { type Record } from '../definitions';

import { type References } from './definitions';

export default async function (records: Record[]): Promise<References>
{
    const portraitIds = Array.from(new Set(records.map(record => record.portraitId).filter(id => id !== undefined)));
    const creatorIds = Array.from(new Set(records.map(record => record.id)));

    const [portraitMap, metricsMap] = await Promise.all([
        getPortraits(portraitIds),
        getMetrics(creatorIds)
    ]);

    return { portraitMap, metricsMap };
}
