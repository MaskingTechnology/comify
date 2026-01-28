
import type { Validation } from '@theshelf/validation';

export const RECORD_TYPE = 'image';

export const requiredStringValidation: Validation =
{
    message: 'Value is missing',
    STRING:
    {
        required: true
    }
};
