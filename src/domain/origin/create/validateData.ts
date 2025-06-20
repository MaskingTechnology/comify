
import type { ValidationSchema } from '^/integrations/validation';
import validator from '^/integrations/validation';

import { requiredIdValidation } from '^/domain/definitions';

import InvalidOrigin from './InvalidOrigin';
import type { ValidationModel } from './types';

const schema: ValidationSchema =
{
    tenantId: requiredIdValidation,
    origin: { URL: { required: true } }
};

export default function validateData({ tenantId, origin }: ValidationModel): void
{
    const result = validator.validate({ tenantId, origin }, schema);

    if (result.invalid)
    {
        throw new InvalidOrigin(result.messages);
    }
}
