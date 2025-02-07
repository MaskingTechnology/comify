
import getMetrics from '^/domain/creator.metrics/getByCreator';
import getImageData from '^/domain/image/getById';

import { DataModel } from '../types';
import { AggregatedData } from './types';

export default async function aggregate(data: DataModel): Promise<AggregatedData>
{
    const [portraitData, metricsData] = await Promise.all([
        data.portraitId !== undefined ? getImageData(data.portraitId) : Promise.resolve(undefined),
        getMetrics(data.id)
    ]);

    return {
        id: data.id,
        fullName: data.fullName,
        nickname: data.nickname,
        portrait: portraitData,
        joinedAt: data.joinedAt,
        metrics: metricsData
    };
}
