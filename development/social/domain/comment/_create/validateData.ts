
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { MESSAGE_MAX_LENGTH, type Data } from '../definitions';
import InvalidComment from './InvalidComment';

type ValidationModel = Pick<Data, 'message'>;

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
