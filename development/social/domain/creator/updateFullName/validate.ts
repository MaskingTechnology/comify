
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { type FullName, fullNameValidation } from '../definitions';
import InvalidFullName from './InvalidFullName';

const schema: ValidationSchema =
{
    fullName: fullNameValidation
};

export default function (fullName: FullName): void
{
    const result = validator.validate({ fullName }, schema);

    if (result.invalid)
    {
        throw new InvalidFullName(result.messages);
    }
}
