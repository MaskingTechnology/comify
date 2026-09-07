
import { type Identifier } from '@comify/common/primitives/identifier';

import toModel from '../_toModel';
import { type Comment } from '../definitions';
import { logger } from '../integrations';

import CommentNotFound from './CommentNotFound';
import retrieve from './retrieve';

export default async function (id: Identifier): Promise<Comment>
{
    const record = await retrieve(id);

    if (record === undefined)
    {
        logger.warn(`Comment with id '${id}' could not be found.`);

        throw new CommentNotFound();
    }

    return toModel(record);
}
