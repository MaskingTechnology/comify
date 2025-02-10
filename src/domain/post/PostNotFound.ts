
import { NotFound } from '^/integrations/runtime';

export default class PostNotFound extends NotFound
{
    constructor()
    {
        super('Post not found');
    }
}
