
import getImageData, { ImageData } from '^/domain/image/get/feature';

import { DataModel } from '../types';

export type InputData = DataModel;

export type AggregatedData = Omit<DataModel, 'email' | 'portraitId'> &
{
    readonly portrait?: ImageData;
};

export default async function feature(data: InputData): Promise<AggregatedData>
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
