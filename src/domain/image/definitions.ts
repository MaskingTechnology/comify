
import type { Validation } from '^/integrations/validation/module';

export const RECORD_TYPE = 'image';

export const requiredStringValidation: Validation =
{
    message: 'Value is missing',
    STRING:
    {
        required: true
    }
};
