
import create from '../create/feature';
import { FULL_NAME_MAX_LENGTH } from '../definitions';
import generateNickname from '../generateNickname/feature';
import type { DataModel } from '../types';

import downloadPortrait from './downloadPortrait';

export default async function feature(fullName: string, nickname: string, email: string, portraitUrl?: string): Promise<DataModel>
{
    const truncatedFullName = fullName.substring(0, FULL_NAME_MAX_LENGTH);
    const generatedNickname = await generateNickname(nickname);

    const portraitId = portraitUrl !== undefined
        ? await downloadPortrait(portraitUrl)
        : undefined;

    return create(truncatedFullName, generatedNickname, email, portraitId);
}
