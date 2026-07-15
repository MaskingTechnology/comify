
import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function run(message: string): Promise<string>
{
    const data = createData(message);

    validateData(data);

    return insertData(data);
}

export { default as InvalidComment } from './InvalidComment';
