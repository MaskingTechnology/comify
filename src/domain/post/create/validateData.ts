
import type { ValidationSchema } from '^/integrations/validation';
import validator from '^/integrations/validation';

import { optionalIdValidation, requiredIdValidation } from '^/domain/definitions';

import InvalidPost from './InvalidPost';
import type { ValidationModel } from './types';

const schema: ValidationSchema =
{
    tenantId: requiredIdValidation,
    creatorId: requiredIdValidation,
    comicId: optionalIdValidation,
    commentId: optionalIdValidation,
    parentId: optionalIdValidation
};

export default function validateData({ tenantId, creatorId, comicId, commentId, parentId }: ValidationModel): void
{
    if (comicId === undefined && commentId === undefined)
    {
        const messages = new Map()
            .set('comicId', 'Either comicId or commentId must be provided')
            .set('commentId', 'Either comicId or commentId must be provided');

        throw new InvalidPost(messages);
    }

    const result = validator.validate({ tenantId, creatorId, comicId, commentId, parentId }, schema);

    if (result.invalid)
    {
        throw new InvalidPost(result.messages);
    }
}
