
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { type CreateData } from './definitions';
import { MESSAGE_MAX_LENGTH } from '../definitions';
import InvalidComment from './InvalidComment';

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

export default function (data: CreateData): void
{
    const result = validator.validate(data, schema);

    if (result.invalid)
    {
        throw new InvalidComment(result.messages);
    }
}
