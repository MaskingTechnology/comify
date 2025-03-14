
import type { ValidationSchema } from '^/integrations/validation';
import validator from '^/integrations/validation';

import { MESSAGE_MAX_LENGTH } from '../definitions';
import InvalidComment from './InvalidComment';
import type { ValidationModel } from './types';

const schema: ValidationSchema =
{
    message:
    {
        message: 'Value is missing or too long',
        STRING:
        {
            required: true,
            maxLength: MESSAGE_MAX_LENGTH
        }
    }
};

export default function validateData({ message }: ValidationModel): void
{
    const result = validator.validate({ message }, schema);

    if (result.invalid)
    {
        throw new InvalidComment(result.messages);
    }
}
