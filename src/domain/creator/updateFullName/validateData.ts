
import type { ValidationSchema } from '@theshelf/validation';
import validator from '@theshelf/validation';

import InvalidCreator from '../create/InvalidCreator';
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
