
import { NotFound } from '^/integrations/runtime';

export default class TenantNotFound extends NotFound
{
    constructor(origin: string)
    {
        super(`No tenant found for origin: ${origin}`);
    }
}
