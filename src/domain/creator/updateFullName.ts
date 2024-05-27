
import type Requester from '../authentication/Requester';
import retrieve from './data/retrieve';
import update from './data/update';
import CreatorView from './view/CreatorView';
import createView from './view/createView';

export default async function updateFullName(requester: Requester, fullName: string): Promise<CreatorView>
{
    const currentData = await retrieve(requester.id);

    const updatedData = currentData.updateFullName(fullName);

    await update(updatedData);

    return createView(updatedData);
}
