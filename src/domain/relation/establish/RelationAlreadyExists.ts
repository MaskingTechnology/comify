
import { ValidationError } from '^/integrations/runtime/module';

export default class RelationAlreadyExists extends ValidationError
{
    constructor(message?: string)
    {
        const messages = new Map().set('followingId', message ?? 'Relation already exists');

        super(messages);
    }
}
