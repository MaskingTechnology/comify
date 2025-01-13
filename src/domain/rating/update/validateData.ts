
import validator, { ValidationSchema } from '^/integrations/validation';

import { optionalIdValidation } from '^/domain/definitions';
import InvalidRating from './InvalidRating';
import { ValidationModel } from './types';

const schema: ValidationSchema =
{
    postId: optionalIdValidation,
    reactionId: optionalIdValidation,
};

export default function validateData({ postId, reactionId }: ValidationModel): void
{
    if (postId === undefined && reactionId === undefined)
    {
        const messages = new Map()
            .set('postId', 'Either postId or reactionId must be provided')
            .set('reactionId', 'Either postId or reactionId must be provided');

        throw new InvalidRating(messages);
    }

    const result = validator.validate({ postId, reactionId }, schema);

    if (result.invalid)
    {
        throw new InvalidRating(result.messages);
    }
}
