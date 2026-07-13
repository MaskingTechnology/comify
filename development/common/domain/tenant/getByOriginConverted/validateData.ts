
import type { ValidationSchema } from '@theshelf/validation';

import validator from '^/integrations/validation';

import { Tenant } from '../definitions';

import InvalidOrigin from './InvalidOrigin';

type ValidationModel = Pick<Tenant, 'origin'>;

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
