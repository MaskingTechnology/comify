
import { type Identifier } from '@comify/common/primitives/identifier';

import toModel from '../_toModel';
import { type Comment } from '../definitions';

import retrieve from './retrieve';

export default async function (id: Identifier): Promise<Comment>
{
    const record = await retrieve(id);

    return toModel(record);
}
