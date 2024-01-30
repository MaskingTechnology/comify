
import type ReactionView from './ReactionView';
import createView from './createView';
import retrieve from './data/retrieve';

export default async function get(id: string): Promise<ReactionView>
{
    const data = await retrieve(id);

    return createView(data);
}
