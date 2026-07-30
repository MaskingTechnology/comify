
import createRecord from './createRecord';
import persist from './persist';

export default async function (postId: string): Promise<void>
{
    const record = createRecord(postId);

    await persist(record);
}
