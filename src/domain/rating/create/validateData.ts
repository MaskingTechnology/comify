
import type { ValidationSchema } from '^/integrations/validation';
import validator from '^/integrations/validation';

import { requiredIdValidation } from '^/domain/definitions';

import InvalidRating from './InvalidRating';
import type { ValidationModel } from './types';

const schema: ValidationSchema =
{
    postId: requiredIdValidation
};

export default function validateData({ postId }: ValidationModel): void
{
    const result = validator.validate({ postId }, schema);

    if (result.invalid)
    {
        throw new InvalidRating(result.messages);
    }
}
