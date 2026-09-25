
import { type Identifier } from '@comify/common/primitives/identifier';

import toModels from '../_toModels';
import { type Comment } from '../definitions';

import retrieve from './retrieve';

export default async function (ids: Identifier[]): Promise<Map<Identifier, Comment>>
{
    const records = await retrieve(ids);

    return toModels(records);
}
