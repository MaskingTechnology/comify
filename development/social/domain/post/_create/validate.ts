
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { identifierValidation, optionalIdentifierValidation } from '@comify/common/primitives/identifier';

import InvalidPost from './InvalidPost';
import type { CreateData } from './definitions';

const schema: ValidationSchema =
{
    tenantId:
    {
        message: 'Value is not a valid tenant id',
        STRING:
        {
            required: true
        }
    },
    creatorId: identifierValidation,
    comicId: optionalIdentifierValidation,
    commentId: optionalIdentifierValidation,
    parentId: optionalIdentifierValidation
};

export default function (data: CreateData): void
{
    if (data.comicId === undefined && data.commentId === undefined)
    {
        const messages = new Map()
            .set('comicId', 'Either comicId or commentId must be provided')
            .set('commentId', 'Either comicId or commentId must be provided');

        throw new InvalidPost(messages);
    }

    const result = validator.validate(data, schema);

    if (result.invalid)
    {
        throw new InvalidPost(result.messages);
    }
}
