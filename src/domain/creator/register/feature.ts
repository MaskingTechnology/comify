
import { FULL_NAME_MAX_LENGTH } from '../definitions';
import generateNickname from '../generateNickname/feature';
import type { DataModel } from '../types';

import createData from './createData';
import downloadPortrait from './downloadPortrait';
import insertData from './insertData';
import validateData from './validateData';

export default async function feature(fullName: string, nickname: string, email: string, portraitUrl?: string): Promise<DataModel>
{
    const truncatedFullName = fullName.substring(0, FULL_NAME_MAX_LENGTH);
    const generatedNickname = await generateNickname(nickname);

    const portraitId = portraitUrl !== undefined
        ? await downloadPortrait(portraitUrl)
        : undefined;

    const data = await createData(truncatedFullName, generatedNickname, email, portraitId);

    validateData({ fullName, email, portraitId });

    await insertData(data);

    return data;
}
