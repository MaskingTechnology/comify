
import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function create(creatorId: string, postId: string): Promise<string>
{
    const newData = createData(creatorId, postId);

    validateData(newData);

    return insertData(newData);
}
