
import { type Identifier } from '@comify/common/primitives/identifier';

import toModels from '../_toModels';
import { type Comic } from '../definitions';

import retrieve from './retrieve';

export default async function (ids: Identifier[]): Promise<Map<Identifier, Comic>>
{
    const records = await retrieve(ids);

    return toModels(records);
}
