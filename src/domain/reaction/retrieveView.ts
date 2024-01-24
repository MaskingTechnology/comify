
import type ReactionView from './ReactionView';
import retrieveData from './retrieveData';
import createView from './createView';

export default async function retrieveView(id: string): Promise<ReactionView>
{
    const data = await retrieveData(id);

    return createView(data);
}
