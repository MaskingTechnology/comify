
import type { ValidationSchema } from '@theshelf/validation';

import validator from '^/integrations/validation';

import { fullNameValidation } from '../definitions';
import InvalidFullName from './InvalidFullName';
import type { ValidationModel } from './types';

const schema: ValidationSchema =
{
    fullName: fullNameValidation
};

export default function validateData({ fullName }: ValidationModel): void
{
    const result = validator.validate({ fullName }, schema);

    if (result.invalid)
    {
        throw new InvalidFullName(result.messages);
    }
}
