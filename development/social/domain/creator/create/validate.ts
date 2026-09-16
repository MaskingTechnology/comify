
import validator from '@comify/common/integrations/validation';

import { fullNameValidation, nicknameValidation, emailValidation } from '../definitions';

import { type CreateData } from './definitions';
import InvalidCreator from './InvalidCreator';

export default function (data: CreateData): void
{
    const result = validator.validate<CreateData>(data, {
        fullName: fullNameValidation,
        nickname: nicknameValidation,
        email: emailValidation
    });

    if (result.invalid)
    {
        throw new InvalidCreator(result.messages);
    }
}
