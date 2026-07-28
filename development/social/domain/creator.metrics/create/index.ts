
import createRecord from './createRecord';
import persist from './persist';

export default async function (creatorId: string): Promise<string>
{
    const record = createRecord(creatorId);

    return persist(record);
}
