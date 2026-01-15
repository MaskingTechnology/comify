
import type { ValidationSchema } from '@theshelf/validation';

import validator from '^/integrations/validation';

import { optionalIdValidation, requiredIdValidation } from '^/domain/definitions';

import { fullNameValidation } from '../definitions';
import InvalidCreator from './InvalidCreator';
import type { ValidationModel } from './types';

const schema: ValidationSchema =
{
    tenantId:
    {
        message: 'Value is not a valid tenant id',
        STRING:
        {
            required: true
        }
    },
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
