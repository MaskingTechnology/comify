
import type ImageData from '../data/ImageData';
import retrieveFile from '../repository/retrieveFile';
import ImageView from './ImageView';

export default async function createView(data: ImageData): Promise<ImageView>
{
    const file = await retrieveFile(data.storageKey);
    const content = file.toString('base64');

    const dataUrl = `data:${data.mimeType};base64,${content}`;

    return new ImageView(dataUrl);
}
