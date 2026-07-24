
import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function run(creatorId: string, postId: string): Promise<string>
{
    const newData = createRecord(creatorId, postId);

    validate(newData);

    return persist(newData);
}
