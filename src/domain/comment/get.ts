
import type Requester from '../authentication/Requester';
import retrieveData from './data/retrieve';
import type CommentView from './view/CommentView';
import createView from './view/createView';

export default async function get(id: string, requester?: Requester): Promise<CommentView>
{
    const data = await retrieveData(id);

    return createView(data);
}
