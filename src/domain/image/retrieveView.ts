
import type ImageView from './ImageView';
import retrieveData from './retrieveData';
import createView from './createView';

export default async function retrieveView(id: string): Promise<ImageView>
{
    const data = await retrieveData(id);

    return createView(data);
}