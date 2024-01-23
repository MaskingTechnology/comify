
import CommentData from './CommentData';

export default async function retrieveData(id: string): Promise<CommentData>
{
    return new CommentData(id, 'Message');
}
