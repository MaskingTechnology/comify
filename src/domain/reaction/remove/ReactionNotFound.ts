
import { NotFoundError } from '^/integrations/runtime/module';

export default class ReactionNotFound extends NotFoundError
{
    constructor()
    {
        super('Reaction not found');
    }
}
