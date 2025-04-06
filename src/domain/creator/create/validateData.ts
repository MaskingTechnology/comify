
import type { ValidationSchema } from '^/integrations/validation';
import validator from '^/integrations/validation';

import { optionalIdValidation } from '^/domain/definitions';

import InvalidCreator from '../InvalidCreator';
import { fullNameValidation } from '../definitions';
import type { ValidationModel } from './types';

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
    tenantId: { STRING: { required: true } },
    portraitId: optionalIdValidation
};

export default function validateData({ fullName, email, tenantId }: ValidationModel): void
{
    const result = validator.validate({ fullName, email, tenantId }, schema);

    if (result.invalid)
    {
        throw new InvalidCreator(result.messages);
    }
}
