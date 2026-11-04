
import validator from '@comify/common/integrations/validation';
import { identifierValidation } from '@comify/common/primitives/identifier';

import { reasonValidation, remarkValidation } from '../definitions';

import { type CreateData } from './definitions';
import InvalidReport from './InvalidReport';

export default function (data: CreateData): void
{
    const result = validator.validate<CreateData>(data, {
        postId: identifierValidation,
        reason: reasonValidation,
        remark: remarkValidation
    });

    if (result.invalid)
    {
        throw new InvalidReport(result.messages);
    }
}
