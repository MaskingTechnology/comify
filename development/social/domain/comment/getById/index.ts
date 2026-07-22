
import logger from '@comify/common/integrations/logging';

import type { Comment } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';
import CommentNotFound from './CommentNotFound';

export default async function run(id: string): Promise<Comment>
{
    const record = await retrieve(id);

    if (record === undefined)
    {
        logger.warn(`Comment with id '${id}' could not be found.`);

        throw new CommentNotFound();
    }

    return toModel(record);
}

export { default as CommentNotFound } from './CommentNotFound';
