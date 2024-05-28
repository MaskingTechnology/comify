
import generateNickname from '../generateNickname/feature';

import { DataModel } from '../types';

import createData from './createData';
import downloadPortrait from './downloadPortrait';
import insertData from './insertData';

export default async function feature(fullName: string, nickname: string, email: string, portraitUrl?: string): Promise<DataModel>
{
    const generatedNickname = await generateNickname(nickname);

    const portraitId = portraitUrl !== undefined
        ? await downloadPortrait(portraitUrl)
        : undefined;

    const data = await createData(fullName, generatedNickname, email, portraitId);

    await insertData(data);

    return data;
}
