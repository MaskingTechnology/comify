
import type Requester from '../authentication/Requester';

import generateNickname from './generateNickname';
import CreatorData from './data/CreatorData';
import create from './data/create';

export default async function register(email: string, fullName: string, nickname: string, requester?: Requester): Promise<CreatorData>
{
    const generatedNickname = await generateNickname(nickname);

    return create(email, fullName, generatedNickname, undefined, requester);
}
