
import type Requester from '../../authentication/Requester';

import PostData from './PostData';

export default async function retrieve(id: string, requester?: Requester): Promise<PostData>
{
    return new PostData(id, 'creatorId', 'comicId');
}
