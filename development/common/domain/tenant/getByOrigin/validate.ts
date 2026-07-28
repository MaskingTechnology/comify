
import type { ValidationSchema } from '@theshelf/validation';

import validator from '^/integrations/validation';

import InvalidOrigin from './InvalidOrigin';

const schema: ValidationSchema =
{
    origin:
    {
        message: 'Invalid origin',
        URL:
        {
            required: true
        }
    }
};

export default function (origin: string): void
{
    const result = validator.validate({ origin }, schema);

    if (result.invalid)
    {
        throw new InvalidOrigin(result.messages);
    }
}
