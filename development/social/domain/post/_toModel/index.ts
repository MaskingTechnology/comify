
import { type Requester } from '@comify/common/security';

import type { Record, Post } from '../definitions';

import getReferences from './getReferences';
import createModel from './createModel';

export default async function (requester: Requester, record: Record): Promise<Post>
{
    const references = await getReferences(requester, record);

    return createModel(record, references);
}
