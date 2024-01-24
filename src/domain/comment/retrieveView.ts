
import type CommentView from './CommentView';
import retrieveData from './retrieveData';
import createView from './createView';

export default async function retrieveView(id: string): Promise<CommentView>
{
    const data = await retrieveData(id);

    return createView(data);
}
