
import validator, { ValidationSchema } from '^/integrations/validation/module';

import { requiredIdValidation } from '^/domain/definitions';

import InvalidComic from './InvalidComic';
import { ValidationModel } from './types';

const schema: ValidationSchema =
{
    imageId: requiredIdValidation,
    structure:
    {
        message: 'Value is not a string',
        STRING:
        {
            required: false
        }
    }
};

export default function validateData({ imageId, structure }: ValidationModel): void
{
    const result = validator.validate({ imageId, structure }, schema);

    if (result.invalid)
    {
        throw new InvalidComic(result.messages);
    }
}
