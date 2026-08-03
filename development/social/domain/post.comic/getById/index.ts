
import type { Identifier } from '@comify/common/primitives/identifier';

import { type Comic } from '../definitions';
import toModel from '../_toModel';
import retrieve from '../_retrieveById';

export default async function (id: Identifier): Promise<Comic>
{
    const record = await retrieve(id);

    return toModel(record);
}
