
import { NotFound } from '^/integrations/errors';

export default class CommentNotFound extends NotFound
{
    constructor()
    {
        super('Comment not found');
    }
}
