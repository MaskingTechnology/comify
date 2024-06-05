
import type { Requester } from '^/domain/authentication/types';

import cleanNickname from '../cleanNickname/feature';
import update from '../update/feature';
import NicknameAlreadyExists from './NicknameAlreadyExists';
import retrieveByNickname from './retrieveByNickname';

export default async function feature(requester: Requester, nickname: string): Promise<void>
{
    const cleanedNickname = cleanNickname(nickname);

    const data = await retrieveByNickname(cleanedNickname);

    if (data !== undefined)
    {
        throw new NicknameAlreadyExists(nickname);
    }

    return update(requester.id, { nickname });
}
