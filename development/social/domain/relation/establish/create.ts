
import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function run(followerId: string, followingId: string): Promise<string>
{
    const record = createRecord(followerId, followingId);

    validate(record);

    return persist(record);
}
