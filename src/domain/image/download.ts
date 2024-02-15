
import type ImageData from './data/ImageData';
import getContent from './http/getContent';
import getInformation from './http/getInformation';
import save from './save';

export default async function download(type: string, imageUrl: string): Promise<ImageData>
{
    const information = await getInformation(imageUrl);
    const content = await getContent(imageUrl);

    return save(type, information, content);
}
