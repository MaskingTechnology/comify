
import type ImageData from '../data/ImageData';
import getFile from '../files/get';
import ImageView from './ImageView';

export default async function createView(data: ImageData): Promise<ImageView>
{
    const file = await getFile(data.storageKey);
    const content = file.toString('base64');

    const dataUrl = `data:${data.mimeType};base64,${content}`;

    return new ImageView(dataUrl);
}
