
import getMetrics from '~/creator.metrics/_retrieveByCreator';
import getImageData from '~/image/getById';

import { type Data, type Creator } from '../definitions';

export default async function run(data: Data): Promise<Creator>
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
