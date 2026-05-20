
import { NotFound } from '@comify/common/integrations/errors';

export default class ComicNotFound extends NotFound
{
    constructor()
    {
        super('Comic not found');
    }
}
