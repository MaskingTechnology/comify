
import validator, { ValidationSchema } from '^/integrations/validation';

import { optionalIdValidation, requiredIdValidation } from '^/domain/definitions';

import InvalidReaction from './InvalidReaction';
import { ValidationModel } from './types';

const schema: ValidationSchema =
{
    creatorId: requiredIdValidation,
    postId: optionalIdValidation,
    reactionId: optionalIdValidation,
    comicId: optionalIdValidation,
    commentId: optionalIdValidation
};

export default function validateData({ creatorId, postId, reactionId, comicId, commentId }: ValidationModel): void
{
    if (postId === undefined && reactionId === undefined)
    {
        const messages = new Map()
            .set('postId', 'Either postId or reactionId must be provided')
            .set('reactionId', 'Either postId or reactionId must be provided');

        throw new InvalidReaction(messages);
    }

    if (comicId === undefined && commentId === undefined)
    {
        const messages = new Map()
            .set('comicId', 'Either comicId or commentId must be provided')
            .set('commentId', 'Either comicId or commentId must be provided');

        throw new InvalidReaction(messages);
    }

    const result = validator.validate({ creatorId, postId, comicId, commentId }, schema);

    if (result.invalid)
    {
        throw new InvalidReaction(result.messages);
    }
}
