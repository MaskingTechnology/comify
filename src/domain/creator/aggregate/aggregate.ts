
import getImageData from '^/domain/image/getById/getById';

import { DataModel } from '../types';
import { AggregatedData } from './types';

export default async function aggregate(data: DataModel): Promise<AggregatedData>
{
    const portraitData = data.portraitId !== undefined
        ? await getImageData(data.portraitId)
        : undefined;

    return {
        id: data.id,
        fullName: data.fullName,
        nickname: data.nickname,
        portrait: portraitData,
        joinedAt: data.joinedAt,
        postCount: data.postCount,
        followerCount: data.followerCount,
        followingCount: data.followingCount
    };
}
