
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { requiredIdValidation } from '~/definitions';

import { type CreateData } from './definitions';
import InvalidRating from './InvalidRating';

const schema: ValidationSchema =
{
    postId: requiredIdValidation
};

export default function validate(data: CreateData): void
{
    const result = validator.validate(data, schema);

    if (result.invalid)
    {
        throw new InvalidRating(result.messages);
    }
}
