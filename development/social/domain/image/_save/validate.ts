
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { requiredStringValidation, type Record } from '../definitions';

import InvalidImage from './InvalidImage';

type ValidationModel = Omit<Record, 'id'>;

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

export default function validate({ storageKey, filename, mimeType, size }: ValidationModel): void
{
    const result = validator.validate({ storageKey, filename, mimeType, size }, schema);

    if (result.invalid)
    {
        throw new InvalidImage(result.messages);
    }
}
