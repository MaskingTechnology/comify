
import type { ValidationSchema } from '^/integrations/validation';
import validator from '^/integrations/validation';

import { requiredStringValidation } from '../definitions';
import type { DataModel } from '../types';
import InvalidImage from './InvalidImage';

const schema: ValidationSchema =
{
    storageKey: requiredStringValidation,
    filename: requiredStringValidation,
    mimeType: requiredStringValidation,
    size:
    {
        message: 'Value is not a number',
        NUMBER:
        {
            required: true
        }
    }
};

export default function validateData({ storageKey, filename, mimeType, size }: DataModel): void
{
    const result = validator.validate({ storageKey, filename, mimeType, size }, schema);

    if (result.invalid)
    {
        throw new InvalidImage(result.messages);
    }
}
