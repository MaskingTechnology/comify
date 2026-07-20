
import { FULL_NAME_MAX_LENGTH } from '../definitions';

export default function makeFullName(fullName: string): string
{
    return fullName.substring(0, FULL_NAME_MAX_LENGTH);
}
