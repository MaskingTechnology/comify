
import { NICKNAME_MAX_LENGTH } from '../definitions';

const REPLACE_EXPRESSION = /[^a-z0-9]/g;

export default function feature(nickname: string): string
{
    return nickname
        .toLowerCase()
        .replace(REPLACE_EXPRESSION, '')
        .substring(0, NICKNAME_MAX_LENGTH);
}
