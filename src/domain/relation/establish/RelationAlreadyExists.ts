
import { BadRequest } from '^/integrations/runtime';

export default class RelationAlreadyExists extends BadRequest
{
    constructor(message?: string)
    {
        super(message ?? 'Relation already exists');
    }
}
