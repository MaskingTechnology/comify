
import type CommentView from './CommentView';
import retrieveData from './data/retrieve';
import createView from './createView';

export default async function get(id: string): Promise<CommentView>
{
    const data = await retrieveData(id);

    return createView(data);
}
