
import { NotFound } from '@comify/common/integrations/errors';

export default class CreatorNotFound extends NotFound
{
    constructor()
    {
        super('Creator not found');
    }
}
