
import validator from '^/integrations/validation';

import { type Range, offsetValidation, limitValidation } from '../definitions';

import InvalidRange from './InvalidRange';

export default function (range: Range): void
{
    const result = validator.validate(range, {
        offset: offsetValidation,
        limit: limitValidation
    });

    if (result.invalid)
    {
        throw new InvalidRange(result.messages);
    }
}

export { InvalidRange };
