
import { BadRequest } from '@comify/common/integrations/errors';

export default class extends BadRequest
{
    constructor(message?: string)
    {
        super(message ?? 'Relation already exists');
    }
}
