
import createData from './createData';
import insertData from './insertData';

export default async function create(postId: string): Promise<string>
{
    const data = createData(postId);

    return insertData(data);
}
