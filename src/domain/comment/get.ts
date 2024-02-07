
import type Requester from '../authentication/Requester';

import type CommentView from './view/CommentView';
import retrieveData from './data/retrieve';
import createView from './view/createView';

export default async function get(id: string, requester?: Requester): Promise<CommentView>
{
    const data = await retrieveData(id);

    return createView(data);
}
