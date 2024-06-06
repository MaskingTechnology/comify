
import validator, { ValidationSchema } from '^/integrations/validation/module';

import { optionalIdValidation, requiredIdValidation } from '^/domain/definitions';

import InvalidReaction from './InvalidReaction';
import { ValidationModel } from './types';

const schema: ValidationSchema = {
    postId: requiredIdValidation,
    comicId: optionalIdValidation,
    commentId: optionalIdValidation
};

export default function validateData({ postId, comicId, commentId }: ValidationModel): void
{
    if (comicId === undefined && commentId === undefined)
    {
        const messages = new Map()
            .set('comicId', 'Either comicId or commentId must be provided')
            .set('commentId', 'Either comicId or commentId must be provided');

        throw new InvalidReaction(messages);
    }

    const result = validator.validate({ postId }, schema);

    if (result.invalid)
    {
        throw new InvalidReaction(result.messages);
    }
}
