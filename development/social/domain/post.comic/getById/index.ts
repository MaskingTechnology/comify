
import { type Identifier } from '@comify/common/primitives/identifier';

import retrieve from '../_retrieveById';
import toModel from '../_toModel';
import { type Comic } from '../definitions';

export default async function (id: Identifier): Promise<Comic>
{
    const record = await retrieve(id);

    return toModel(record);
}
