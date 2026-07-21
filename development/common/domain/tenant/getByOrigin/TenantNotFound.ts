
import { NotFound } from '^/integrations/errors';

export default class TenantNotFound extends NotFound
{
    constructor()
    {
        super('Tenant not found');
    }
}
