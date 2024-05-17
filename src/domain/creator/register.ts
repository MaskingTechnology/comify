
import type CreatorData from './data/CreatorData';
import createData from './data/createData';
import generateNickname from './generateNickname';
import downloadPortrait from './repository/downloadPortrait';
import insert from './repository/insert';

export default async function register(fullName: string, nickname: string, email: string, portraitUrl?: string): Promise<CreatorData>
{
    const generatedNickname = await generateNickname(nickname);

    const portrait = portraitUrl !== undefined
        ? await downloadPortrait(portraitUrl)
        : undefined;

    const creator = createData(fullName, generatedNickname, email, portrait?.id);

    await insert(creator);

    return creator;
}
