
import type { ValidationSchema } from '@theshelf/validation';
import validator from '@theshelf/validation';

import { optionalIdValidation, requiredIdValidation } from '~/definitions';

import InvalidCreator from '../InvalidCreator';
import { fullNameValidation } from '../definitions';
import type { ValidationModel } from './types';

const schema: ValidationSchema =
{
    tenantId: requiredIdValidation,
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

export default function validateData({ tenantId, fullName, email }: ValidationModel): void
{
    const result = validator.validate({ tenantId, fullName, email }, schema);

    if (result.invalid)
    {
        throw new InvalidCreator(result.messages);
    }
}
