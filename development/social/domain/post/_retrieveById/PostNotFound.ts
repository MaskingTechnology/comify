
import { NotFound } from '@comify/common/integrations/errors';

export default class extends NotFound
{
    constructor()
    {
        super('Post not found');
    }
}
