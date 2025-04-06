
import type { DataModel } from '../types';

import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function create(fullName: string, nickname: string, email: string, tenantId: string, portraitId: string | undefined = undefined): Promise<DataModel>
{
    const data = await createData(fullName, nickname, email, tenantId, portraitId);

    validateData(data);

    await insertData(data);

    return data;
}
