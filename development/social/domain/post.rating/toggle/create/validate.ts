
import validator from '@comify/common/integrations/validation';
import { identifierValidation } from '@comify/common/primitives/identifier';

import { type CreateData } from '../definitions';

import InvalidRating from './InvalidRating';

export default function ({ postId }: CreateData): void
{
    const result = validator.validate({ postId }, {
        postId: identifierValidation
    });

    if (result.invalid)
    {
        throw new InvalidRating(result.messages);
    }
}
