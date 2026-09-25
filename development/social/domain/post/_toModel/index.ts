
import { type Requester } from '@comify/common/security';

import { type Record, type Post } from '../definitions';

import createModel from './createModel';
import getReferences from './getReferences';

export default async function (requester: Requester, record: Record): Promise<Post>
{
    const references = await getReferences(requester, record);

    return createModel(record, references);
}
