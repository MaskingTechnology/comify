
import type CommentData from './data/CommentData';
import createData from './data/createData';
import insert from './repository/insert';

export default async function create(message: string): Promise<CommentData>
{
    const data = createData(message);

    await insert(data);

    return data;
}
