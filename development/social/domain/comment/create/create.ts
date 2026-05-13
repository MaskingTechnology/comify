
import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function create(message: string): Promise<string>
{
    const data = createData(message);

    validateData(data);

    return insertData(data);
}
