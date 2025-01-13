
import type { Validation } from '^/integrations/validation';

export const RECORD_TYPE = 'image';

export const requiredStringValidation: Validation =
{
    message: 'Value is missing',
    STRING:
    {
        required: true
    }
};
