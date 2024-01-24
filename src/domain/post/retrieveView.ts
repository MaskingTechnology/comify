
import type PostView from './PostView';
import retrieveData from './retrieveData';
import createView from './createView';

export default async function retrieveView(id: string): Promise<PostView>
{
    const data = await retrieveData(id);

    return createView(data);
}
