
import CreatorData from './data/CreatorData';
import create from './data/create';
import generateNickname from './generateNickname';

export default async function register(email: string, fullName: string, nickname: string, portrait?: string): Promise<CreatorData>
{
    const generatedNickname = await generateNickname(nickname);

    return create(email, fullName, generatedNickname, portrait);
}
