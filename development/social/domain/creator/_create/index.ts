
import { type Data } from '../definitions';

import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function run(tenantId: string, fullName: string, nickname: string, email: string, portraitId: string | undefined = undefined): Promise<Data>
{
    const data = await createData(tenantId, fullName, nickname, email, portraitId);

    validateData(data);

    await insertData(data);

    return data;
}

export { default as InvalidCreator } from './InvalidCreator';
