
import type { ValidationSchema } from '^/integrations/validation';
import validator from '^/integrations/validation';

import InvalidOrigin from './InvalidOrigin';
import { type ValidationModel } from './types';

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

export default function validateData({ origin }: ValidationModel): void
{
    const result = validator.validate({ origin }, schema);

    if (result.invalid)
    {
        throw new InvalidOrigin(result.messages);
    }
}
