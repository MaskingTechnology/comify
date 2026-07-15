
import createData from './createData';
import insertData from './insertData';

export default async function run(postId: string): Promise<string>
{
    const data = createData(postId);

    return insertData(data);
}

export { default as subscriptions } from '../subscriptions';
