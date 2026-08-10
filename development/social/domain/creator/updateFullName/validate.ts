
import validator from '@comify/common/integrations/validation';

import { type FullName, fullNameValidation } from '../definitions';
import InvalidFullName from './InvalidFullName';

export default function (fullName: FullName): void
{
    const result = validator.validate({ fullName }, {
        fullName: fullNameValidation
    });

    if (result.invalid)
    {
        throw new InvalidFullName(result.messages);
    }
}
