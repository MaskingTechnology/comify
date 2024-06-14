
import { NotFound } from '^/integrations/runtime/module';

export default class ReactionNotFound extends NotFound
{
    constructor()
    {
        super('Reaction not found');
    }
}
