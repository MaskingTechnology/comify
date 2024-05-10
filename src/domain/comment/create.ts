
import type CommentData from './data/CommentData';
import createData from './data/create';

export default async function create(message: string): Promise<CommentData>
{
    return createData(message);
}
