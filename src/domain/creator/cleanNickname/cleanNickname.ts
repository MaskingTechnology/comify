
import { NICKNAME_MAX_LENGTH } from '../definitions';

import { REPLACE_EXPRESSION } from './definitions';

export default function cleanNickname(nickname: string): string
{
    return nickname
        .toLowerCase()
        .replace(REPLACE_EXPRESSION, '')
        .substring(0, NICKNAME_MAX_LENGTH);
}
