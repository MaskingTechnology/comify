
import createData from './createData';
import insertData, { Data } from './insertData';

export { type Data };

export default async function feature(message: string): Promise<Data>
{
    const data = createData(message);

    return insertData(data);
}
