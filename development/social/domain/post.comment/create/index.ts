
import { type Identifier } from '@comify/common/primitives/identifier';

import createRecord from './createRecord';
import { type CreateData } from './definitions';
import persist from './persist';
import validate from './validate';

export default async function (data: CreateData): Promise<Identifier>
{
    validate(data);

    const record = createRecord(data.message);

    return persist(record);
}
