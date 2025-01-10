
import { Requester } from '^/domain/authentication';

import cleanNickname from '../cleanNickname';
import update from '../update';
import NicknameAlreadyExists from './NicknameAlreadyExists';
import retrieveByNickname from './retrieveByNickname';

export default async function updateNickname(requester: Requester, nickname: string): Promise<void>
{
    const cleanedNickname = cleanNickname(nickname);

    const data = await retrieveByNickname(cleanedNickname);

    if (data !== undefined)
    {
        throw new NicknameAlreadyExists(nickname);
    }

    return update(requester.id, { nickname });
}
