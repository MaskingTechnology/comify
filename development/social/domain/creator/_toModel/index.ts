
import getMetrics from '~/creator.metrics/getByCreator';
import getImageData from '~/image/getById';

import { type Record, type Creator } from '../definitions';

export default async function run(record: Record): Promise<Creator>
{
    const [portraitData, metricsData] = await Promise.all([
        record.portraitId !== undefined ? getImageData(record.portraitId) : Promise.resolve(undefined),
        getMetrics(record.id)
    ]);

    return {
        id: record.id,
        fullName: record.fullName,
        nickname: record.nickname,
        portrait: portraitData,
        joinedAt: record.joinedAt,
        metrics: metricsData
    };
}
