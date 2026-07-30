
import createRecord from './createRecord';
import persist from './persist';

export default async function (creatorId: string): Promise<void>
{
    const record = createRecord(creatorId);

    await persist(record);
}
