
import { generateId } from '^/integrations/utilities/crypto';

import CommentData from './CommentData';

export default function createData(message: string): CommentData
{
    const id = generateId();

    return new CommentData(id, message);
}
