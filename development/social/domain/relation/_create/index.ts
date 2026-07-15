
import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function run(followerId: string, followingId: string): Promise<string>
{
    const data = createData(followerId, followingId);

    validateData(data);

    return insertData(data);
}

export { default as InvalidRelation } from './InvalidRelation';
