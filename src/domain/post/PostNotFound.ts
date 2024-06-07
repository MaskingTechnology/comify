
import { NotFoundError } from '^/integrations/runtime/module';

export default class PostNotFound extends NotFoundError
{
    constructor()
    {
        super('Post not found');
    }
}
