
import type ComicView from './ComicView';
import retrieveData from './retrieveData';
import createView from './createView';

export default async function retrieveView(id: string): Promise<ComicView>
{
    const data = await retrieveData(id);

    return createView(data);
}
