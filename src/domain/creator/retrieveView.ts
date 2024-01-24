
import type CreatorView from './CreatorView';
import retrieveData from './retrieveData';
import createView from './createView';

export default async function retrieveView(id: string): Promise<CreatorView>
{
    const data = await retrieveData(id);

    return createView(data);
}
