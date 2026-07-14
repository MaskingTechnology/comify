
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { optionalIdValidation } from '../../definitions';

import { fullNameValidation, type Data } from '../definitions';

import InvalidCreator from './InvalidCreator';

type ValidationModel = Pick<Data, 'tenantId' | 'fullName' | 'email' | 'portraitId'>;

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
