
import validator from '@comify/common/integrations/validation';
import { identifierValidation } from '@comify/common/primitives/identifier';

import { type CreateData } from './definitions';
import InvalidPost from './InvalidPost';

export default function (data: CreateData): void
{
    if (data.comicId === undefined && data.commentId === undefined)
    {
        const messages = new Map()
            .set('comicId', 'Either comicId or commentId must be provided')
            .set('commentId', 'Either comicId or commentId must be provided');

        throw new InvalidPost(messages);
    }

    const optionalIdentifierValidation = { ...identifierValidation, required: false };

    const result = validator.validate(data, {
        creatorId: identifierValidation,
        comicId: optionalIdentifierValidation,
        commentId: optionalIdentifierValidation,
        parentId: optionalIdentifierValidation
    });

    if (result.invalid)
    {
        throw new InvalidPost(result.messages);
    }
}
