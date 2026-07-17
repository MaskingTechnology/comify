
import createRecord from './createRecord';
import persist from './persist';

export default async function run(postId: string): Promise<string>
{
    const record = createRecord(postId);

    return persist(record);
}

export { default as subscriptions } from '../subscriptions';
