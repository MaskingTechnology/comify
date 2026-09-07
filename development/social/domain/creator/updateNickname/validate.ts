
import validator from '@comify/common/integrations/validation';

import { type Nickname, nicknameValidation } from '../definitions';

import InvalidNickname from './InvalidNickname';

export default function (nickname: Nickname): void
{
    const result = validator.validate({ nickname }, {
        nickname: nicknameValidation
    });

    if (result.invalid)
    {
        throw new InvalidNickname(result.messages);
    }
}
