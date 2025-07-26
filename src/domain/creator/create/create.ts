
import type { DataModel } from '../types';
import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function create(tenantId: string, fullName: string, nickname: string, email: string, portraitId: string | undefined = undefined): Promise<DataModel>
{
    const data = await createData(tenantId, fullName, nickname, email, portraitId);

    validateData(data);

    await insertData(data);

    return data;
}
