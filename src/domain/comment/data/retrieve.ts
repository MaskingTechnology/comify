
import CommentData from './CommentData';

export default async function retrieve(id: string): Promise<CommentData>
{
    return new CommentData(id, 'Message');
}
