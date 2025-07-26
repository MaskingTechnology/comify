
import { NotFound } from '^/integrations/runtime';

export default class CreatorNotFound extends NotFound
{
    constructor(tenantId: string, id: string)
    {
        super(`No creator for id: ${id} and tenant '${tenantId}'`);
    }
}
