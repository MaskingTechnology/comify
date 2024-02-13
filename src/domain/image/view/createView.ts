
import type ImageData from '../data/ImageData';
import ImageView from './ImageView';

export default async function createView(data: ImageData): Promise<ImageView>
{
    return new ImageView(data.filename);
}
