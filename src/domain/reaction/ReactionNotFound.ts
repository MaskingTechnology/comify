
import { NotFound } from '^/integrations/runtime';

export default class ReactionNotFound extends NotFound
{
    constructor()
    {
        super('Reaction not found');
    }
}
