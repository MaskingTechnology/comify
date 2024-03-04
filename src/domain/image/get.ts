
import retrieveData from './data/retrieve';
import type ImageView from './view/ImageView';
import createView from './view/createView';

export default async function get(id: string): Promise<ImageView>
{
    const data = await retrieveData(id);

    return createView(data);
}
