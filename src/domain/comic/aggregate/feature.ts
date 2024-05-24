
import getImageData, { type Result as ImageData } from '^/domain/image/get/feature';

export type Data = {
    readonly id: string;
    readonly imageId: string;
    readonly structure?: string;
};

export type Result = {
    readonly id: string;
    readonly image: ImageData;
};

export default async function feature(data: Data): Promise<Result>
{
    const imageView = await getImageData(data.imageId);

    return { id: data.id, image: imageView };
}
