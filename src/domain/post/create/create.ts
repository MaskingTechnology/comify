
import createData from './createData';
import insertData from './insertData';

export default async function create(creatorId: string, comicId: string): Promise<string>
{
    const data = createData(creatorId, comicId);

    return insertData(data);
}
