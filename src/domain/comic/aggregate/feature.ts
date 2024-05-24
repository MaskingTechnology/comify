
import type ImageView from '^/domain/image/view/ImageView';

import retrieveImageView from '../../image/get';

export type Input = {
    readonly id: string;
    readonly imageId: string;
    readonly structure?: string;
};

export type Result = {
    readonly id: string;
    readonly image: ImageView;
};

export default async function feature(input: Input): Promise<Result>
{
    const imageView = await retrieveImageView(input.imageId);

    return { id: input.id, image: imageView };
}
