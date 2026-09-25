
import { NICKNAME_MAX_LENGTH, type Nickname } from '../definitions';

const REPLACE_EXPRESSION = /[^a-z0-9]/g;

export default function (nickname: Nickname): Nickname
{
    return nickname
        .toLowerCase()
        .replace(REPLACE_EXPRESSION, '')
        .substring(0, NICKNAME_MAX_LENGTH);
}
