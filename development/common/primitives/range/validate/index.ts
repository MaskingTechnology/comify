
import validator from '^/integrations/validation';

import InvalidRange from './InvalidRange';

import { type Range, offsetValidation, limitValidation } from '../definitions';

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
