
import retrieve from './data/retrieve';
import type ReactionView from './view/ReactionView';
import createView from './view/createView';

export default async function get(id: string): Promise<ReactionView>
{
    const data = await retrieve(id);

    return createView(data);
}
