
import { type Record } from '../definitions';

import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function run(tenantId: string, fullName: string, nickname: string, email: string, portraitId: string | undefined = undefined): Promise<Record>
{
    const record = await createRecord(tenantId, fullName, nickname, email, portraitId);

    validate(record);

    await persist(record);

    return record;
}

export { default as InvalidCreator } from './InvalidCreator';
