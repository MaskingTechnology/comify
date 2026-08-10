
import validator from '@comify/common/integrations/validation';

import { type CreateData } from './definitions';
import { messageValidation } from '../definitions';
import InvalidComment from './InvalidComment';

export default function (data: CreateData): void
{
    const result = validator.validate(data, {
        message: messageValidation
    });

    if (result.invalid)
    {
        throw new InvalidComment(result.messages);
    }
}
