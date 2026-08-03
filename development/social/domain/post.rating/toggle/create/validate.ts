
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { identifierValidation } from '@comify/common/primitives/identifier';

import { type CreateData } from '../definitions';
import InvalidRating from './InvalidRating';

const schema: ValidationSchema =
{
    postId: identifierValidation
};

export default function ({ postId }: CreateData): void
{
    const result = validator.validate({ postId }, schema);

    if (result.invalid)
    {
        throw new InvalidRating(result.messages);
    }
}
