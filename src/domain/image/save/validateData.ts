
import validator, { ValidationSchema } from '^/integrations/validation/module';

import { requiredStringValidation } from '../definitions';
import { DataModel } from '../types';
import InvalidImage from './InvalidImage';

const schema: ValidationSchema = {
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
