
import ImageData from './ImageData';
import ImageView from './ImageView';

export default async function createView(data: ImageData): Promise<ImageView>
{
    return new ImageView(data.fileName);
}
