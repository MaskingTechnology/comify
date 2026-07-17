
import type { Comment } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';

export default async function run(id: string): Promise<Comment>
{
    const record = await retrieve(id);
    
    return toModel(record);
}

export { default as CommentNotFound } from './CommentNotFound';
