
import validator from '^/integrations/validation';

import { type Origin, originValidation } from '../definitions';

import InvalidOrigin from './InvalidOrigin';

export default function (origin: string): void
{
    const result = validator.validate<{origin: Origin}>({ origin }, {
        origin: originValidation
    });

    if (result.invalid)
    {
        throw new InvalidOrigin(result.messages);
    }
}
