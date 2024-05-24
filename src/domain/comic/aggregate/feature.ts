
import getImageData, { ImageData } from '^/domain/image/get/feature';

export type Data = {
    readonly id: string;
    readonly imageId: string;
};

export type AggregatedData = {
    readonly id: string;
    readonly image: ImageData;
};

export default async function feature(data: Data): Promise<AggregatedData>
{
    const imageData = await getImageData(data.imageId);

    return { id: data.id, image: imageData };
}
