
import eraseImage from '^/domain/image/erase/feature';

import eraseData from './eraseData';

export type Data = {
    readonly id: string;
    readonly imageId: string;
};

export default async function feature(data: Data): Promise<void>
{
    await eraseData(data.id);
    await eraseImage({ id: data.imageId });
}
