
import type Requester from '../authentication/Requester';
import CreatorData from './data/CreatorData';
import create from './data/create';
import generateNickname from './generateNickname';

export default async function register(email: string, fullName: string, nickname: string, requester?: Requester): Promise<CreatorData>
{
    const generatedNickname = await generateNickname(nickname);

    return create(email, fullName, generatedNickname, undefined);
}
