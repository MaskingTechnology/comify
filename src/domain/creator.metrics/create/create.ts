
import createData from './createData';
import insertData from './insertData';

export default async function create(creatorId: string): Promise<string>
{
    const data = createData(creatorId);

    return insertData(data);
}
