
import retrieveData from './repository/retrieve';
import type CommentView from './view/CommentView';
import createView from './view/createView';

export default async function get(id: string): Promise<CommentView>
{
    const data = await retrieveData(id);

    return createView(data);
}
