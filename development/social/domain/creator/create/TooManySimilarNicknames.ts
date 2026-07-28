
import { BadRequest } from '@comify/common/integrations/errors';

export default class extends BadRequest
{
    constructor(message?: string)
    {
        super(message ?? 'Too many similar nicknames');
    }
}
