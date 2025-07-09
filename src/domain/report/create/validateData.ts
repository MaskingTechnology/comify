
import type { ValidationSchema } from '^/integrations/validation';
import validator from '^/integrations/validation';

import { requiredIdValidation } from '^/domain/definitions';

import { REMARK_MAX_LENGTH } from '../definitions';
import InvalidReport from './InvalidReport';
import type { ValidationModel } from './types';

const schema: ValidationSchema =
{
    postId: requiredIdValidation,

    remark:
    {
        message: 'value is too long',
        STRING:
        {
            required: false,
            maxLength: REMARK_MAX_LENGTH

        }

    }
};

export default function validateData({ postId, remark }: ValidationModel): void
{
    const result = validator.validate({ postId, remark }, schema);

    if (result.invalid)
    {
        throw new InvalidReport(result.messages);
    }
}
