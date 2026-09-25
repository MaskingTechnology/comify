
import validator from '@comify/common/integrations/validation';
import { type Identifier, identifierValidation } from '@comify/common/primitives/identifier';

import { type CreateData } from '../definitions';

import InvalidRating from './InvalidRating';

export default function (postId: Identifier): void
{
    const result = validator.validate<CreateData>({ postId}, {
        postId: identifierValidation
    });

    if (result.invalid)
    {
        throw new InvalidRating(result.messages);
    }
}
