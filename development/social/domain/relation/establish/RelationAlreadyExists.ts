
import { BadRequest } from '@comify/common/integrations/errors';

export default class RelationAlreadyExists extends BadRequest
{
    constructor(message?: string)
    {
        super(message ?? 'Relation already exists');
    }
}
