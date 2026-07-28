
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { fullNameValidation } from '../definitions';

import type { CreateData } from './definitions';

import InvalidCreator from './InvalidCreator';

const schema: ValidationSchema =
{
    fullName: fullNameValidation,
    nickname:
    {
        message: 'Value is not a valid nickname',
        STRING:
        {
            required: true,
            minLength: 3,
            maxLength: 255
        }
    },
    email:
    {
        message: 'Value is not a valid email',
        EMAIL:
        {
            required: true
        }
    }
};

export default function (data: CreateData): void
{
    const result = validator.validate(data, schema);

    if (result.invalid)
    {
        throw new InvalidCreator(result.messages);
    }
}
