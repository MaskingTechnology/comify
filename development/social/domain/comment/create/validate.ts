
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { type CreateData } from './definitions';
import { MESSAGE_MAX_LENGTH, type Record } from '../definitions';
import InvalidComment from './InvalidComment';

type ValidationModel = Pick<Record, 'message'>;

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

export default function validate(data: CreateData): void
{
    const result = validator.validate(data, schema);

    if (result.invalid)
    {
        throw new InvalidComment(result.messages);
    }
}
