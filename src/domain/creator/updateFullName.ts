
import type Requester from '../authentication/Requester';
import retrieve from './data/retrieve';
import update from './data/update';

export default async function updateFullName(requester: Requester, fullName: string)
{
    const currentData = await retrieve(requester.id);

    const updatedData = currentData.updateFullName(fullName);

    return update(updatedData);
}
