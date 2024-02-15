
import CreatorData from './data/CreatorData';
import create from './data/create';
import generateNickname from './data/generateNickname';
import downloadPortrait from './image/downloadPortrait';

export default async function register(email: string, fullName: string, nickname: string, portraitUrl?: string): Promise<CreatorData>
{
    const generatedNickname = await generateNickname(nickname);
    const portrait = portraitUrl !== undefined
        ? await downloadPortrait(portraitUrl)
        : undefined;

    return create(email, fullName, generatedNickname, portrait?.id);
}
