
import createData from './createData';
import insertData from './insertData';

export default async function feature(message: string): Promise<string>
{
    const data = createData(message);

    return insertData(data);
}
