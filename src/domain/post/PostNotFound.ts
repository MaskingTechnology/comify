
import { NotFound } from '^/integrations/runtime/module';

export default class PostNotFound extends NotFound
{
    constructor()
    {
        super('Post not found');
    }
}
