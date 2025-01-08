
import create from '../create';
import { FULL_NAME_MAX_LENGTH } from '../definitions';
import generateNickname from '../generateNickname';
import type { DataModel } from '../types';

import downloadPortrait from './downloadPortrait';

export default async function register(fullName: string, nickname: string, email: string, portraitUrl: string | undefined = undefined): Promise<DataModel>
{
    const truncatedFullName = fullName.substring(0, FULL_NAME_MAX_LENGTH);
    const generatedNickname = await generateNickname(nickname);

    const portraitId = portraitUrl !== undefined
        ? await downloadPortrait(portraitUrl)
        : undefined;

    return create(truncatedFullName, generatedNickname, email, portraitId);
}
