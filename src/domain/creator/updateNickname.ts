
import Requester from '../authentication/Requester';
import nicknameExists from './data/exists';
import retrieve from './data/retrieve';
import update from './data/update';
import NicknameAlreadyExists from './errors/NicknameAlreadyExists';
import CreatorView from './view/CreatorView';
import createView from './view/createView';


export default async function updateNickname(requester: Requester, nickname: string): Promise<CreatorView>
{
    if (await nicknameExists(nickname))
    {
        throw new NicknameAlreadyExists(nickname);
    }
    const currentData = await retrieve(requester.id);
    const updatedData = currentData.updateNickname(nickname);

    await update(updatedData);

    return createView(updatedData);
}
