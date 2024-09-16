
import type { DataModel } from '../types';

import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function feature(fullName: string, nickname: string, email: string, portraitId?: string): Promise<DataModel>
{
    const data = await createData(fullName, nickname, email, portraitId);

    validateData(data);

    await insertData(data);

    return data;
}
