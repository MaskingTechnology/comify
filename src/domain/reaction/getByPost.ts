
import type Requester from '../authentication/Requester';
import retrieveByPost from './repository/retrieveByPost';
import type ReactionView from './view/ReactionView';
import createView from './view/createView';

export default async function getByPost(requester: Requester, postId: string): Promise<ReactionView[]>
{
    const data = await retrieveByPost(postId);

    const views = data.map(item => createView(requester, item));

    return Promise.all(views);
}
