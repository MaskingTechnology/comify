
import { NotFound } from '^/integrations/errors';

export default class extends NotFound
{
    constructor()
    {
        super('Tenant not found');
    }
}
