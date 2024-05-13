
import Requester from '../authentication/Requester';
import generateNickname from './data/generateNickname';
import retrieve from './data/retrieve';
import update from './data/update';

export default async function updateNickname(requester: Requester, nickname: string)
{
    const generatedNickname = await generateNickname(nickname);
    const currentData = await retrieve(requester.id);
    const updatedData = currentData.updateNickname(generatedNickname);

    return update(updatedData);
}
