
import type { ValidationSchema } from '^/integrations/validation';
import validator from '^/integrations/validation';

import InvalidCreator from '../InvalidCreator';
import { fullNameValidation } from '../definitions';
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
        throw new InvalidCreator(result.messages);
    }
}
