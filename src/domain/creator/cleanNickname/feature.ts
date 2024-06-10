
import { NICKNAME_MAX_LENGTH } from '../definitions';

const REPLACE_EXPRESSION = /[^a-zA-Z0-9]/g;

export default function feature(nickname: string): string
{
    return nickname
        .replace(REPLACE_EXPRESSION, '')
        .substring(0, NICKNAME_MAX_LENGTH);
}
