
import type { Identifier } from '@comify/common/primitives/identifier';

import { type CreateData } from './definitions';
import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function (data: CreateData): Promise<Identifier>
{
    validate(data);

    const record = createRecord(data.message);

    return persist(record);
}
