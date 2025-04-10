
import { NotFound } from '^/integrations/runtime';

export default class CreatorNotFound extends NotFound
{
    constructor(id: string, tenantId?: string)
    {
        super(`No creator for id: ${id} and tenant ${tenantId || 'undefined'}`);
    }
}
