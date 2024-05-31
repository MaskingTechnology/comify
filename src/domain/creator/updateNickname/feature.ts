
import type { Requester } from '^/domain/authentication/types';

import update from '../update/feature';
import NicknameAlreadyExists from './NicknameAlreadyExists';
import retrieveByNickname from './retrieveByNickname';

export default async function feature(requester: Requester, nickname: string): Promise<void>
{
    const data = await retrieveByNickname(nickname);

    if (data !== undefined)
    {
        throw new NicknameAlreadyExists(nickname);
    }

    return update(requester.id, { nickname });
}
