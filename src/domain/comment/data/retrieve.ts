
import type Requester from '../../authentication/Requester';

import CommentData from './CommentData';

export default async function retrieve(id: string, requester?: Requester): Promise<CommentData>
{
    return new CommentData(id, 'Message');
}
