
import generateNickname from './generateNickname';
import CreatorData from './data/CreatorData';
import create from './data/create';

export default async function register(email: string, fullName: string, nickname: string): Promise<CreatorData>
{
    const generatedNickname = await generateNickname(nickname);

    return create(email, fullName, generatedNickname, undefined);
}
