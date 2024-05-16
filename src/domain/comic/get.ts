
import retrieveData from './repository/retrieve';
import type ComicView from './view/ComicView';
import createView from './view/createView';

export default async function get(id: string): Promise<ComicView>
{
    const data = await retrieveData(id);

    return createView(data);
}
