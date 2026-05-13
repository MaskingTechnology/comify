
import { NotFound } from '^/integrations/errors';

export default class PostNotFound extends NotFound
{
    constructor()
    {
        super('Post not found');
    }
}
