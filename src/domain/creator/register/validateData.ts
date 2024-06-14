
import validator, { ValidationSchema } from '^/integrations/validation/module';

import { optionalIdValidation } from '^/domain/definitions';

import InvalidCreator from '../InvalidCreator';
import { fullNameValidation } from '../definitions';
import { ValidationModel } from './types';

const schema: ValidationSchema =
{
    fullName: fullNameValidation,
    email:
    {
        message: 'Value is not a valid email',
        EMAIL:
        {
            required: true
        }
    },
    portraitId: optionalIdValidation
};

export default function validateData({ fullName, email }: ValidationModel): void
{
    const result = validator.validate({ fullName, email }, schema);

    if (result.invalid)
    {
        throw new InvalidCreator(result.messages);
    }
}
