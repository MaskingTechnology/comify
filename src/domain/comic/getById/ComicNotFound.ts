
import { NotFound } from '^/integrations/errors';

export default class ComicNotFound extends NotFound
{
    constructor()
    {
        super('Comic not found');
    }
}
